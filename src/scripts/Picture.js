import RGBToHex from './RGBToHex';

export default class Picture {
  constructor(canvas, ctx, currentColor, size, prevColor) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.isDrawing = false;
    this.currentColor = currentColor;
    this.prevColorCache = '#ffffff';
    this.size = size;
    this.prevColor = prevColor;

    if (canvas == null) {
      throw new Error('there is no canvas');
    }
  }

  windowReload = () => {
    if (localStorage.getItem('piskelCloneImg') !== null) {
      const img = new Image();
      const dataURI = localStorage.getItem('piskelCloneImg');
      img.src = `data:image/png;base64,${dataURI}`;
      img.addEventListener('load', () => this.ctx.drawImage(img, 0, 0));
    }

    if (localStorage.getItem('piskelCloneResolution') !== null) {
      this.size = Number(localStorage.getItem('piskelCloneResolution'));
      [this.canvas.width, this.canvas.height] = [this.size, this.size];
      const currentRes = document.querySelector('.res-active');
      currentRes.classList.remove('res-active');

      const target = document.querySelector(`#res${this.size}`);
      target.classList.add('res-active');
    }
  };

  saveInLocalStorage(localStorageKey) {
    localStorage.removeItem(localStorageKey);

    const dataURI = this.canvas.toDataURL('image/png').replace(/^data:image\/(png|jpg);base64,/, '');
    localStorage.setItem(localStorageKey, dataURI);
  }

  plot(x, y) {
    this.ctx.imageSmoothingEnabled = false;
    this.ctx.fillStyle = this.currentColor.value;
    this.ctx.fillRect(x, y, 1, 1);
  }

  // Bresenham algorithm
  bresenham = (x1, x2, y1, y2) => {
    let [innerX1, innerY1] = [x1, y1];
    const [innerX2, innerY2] = [x2, y2];
    if (!this.isDrawing) return;
    this.isDrawing = true;

    const deltaX = Math.abs(x2 - x1);
    const deltaY = Math.abs(y2 - y1);
    const signX = x1 < x2 ? 1 : -1;
    const signY = y1 < y2 ? 1 : -1;
    let err = deltaX - deltaY;

    this.plot(innerX2, innerY2);
    while (innerX1 !== innerX2 || innerY1 !== innerY2) {
      this.plot(innerX1, innerY1);
      const err2 = err * 2;
      if (err2 > -deltaY) {
        err -= deltaY;
        innerX1 += signX;
      }
      if (err2 < deltaX) {
        err += deltaX;
        innerY1 += signY;
      }
    }
  };

  getXYCoors(e) {
    return [Math.ceil((e.offsetX / 512) * this.size), Math.ceil((e.offsetY / 512) * this.size)];
  }

  draw = e => {
    if (this.isDrawing) {
      [this.x2, this.y2] = this.getXYCoors(e);

      this.bresenham(this.x1, this.x2, this.y1, this.y2);
      [this.x1, this.y1] = [this.x2, this.y2];
    }
  };

  drawOnMouseDown = e => {
    this.isDrawing = true;
    [this.x1, this.y1] = this.getXYCoors(e);
    this.plot(this.x1, this.y1);
  };

  drawMouseUp = e => {
    [this.x2, this.y2] = this.getXYCoors(e);
    this.bresenham(this.x1, this.x2, this.y1, this.y2);
    this.isDrawing = false;
    this.saveInLocalStorage('piskelCloneImg');
  };

  pencilTool = targetTool => {
    if (targetTool === 'pencil') {
      this.canvas.addEventListener('mousemove', this.draw);
      this.canvas.addEventListener('mousedown', this.drawOnMouseDown);
      this.canvas.addEventListener('mouseup', this.drawMouseUp);
      this.canvas.addEventListener('mouseout', () => {
        this.isDrawing = false;
      });
    } else {
      this.canvas.removeEventListener('mousemove', this.draw);
      this.canvas.removeEventListener('mousedown', this.drawOnMouseDown);
      this.canvas.removeEventListener('mouseup', this.drawMouseUp);
    }
  };

  bucketTool(targetTool) {
    if (targetTool === 'bucket') {
      this.canvas.addEventListener('mousedown', this.floodFill);
    } else {
      this.canvas.removeEventListener('mousedown', this.floodFill);
    }
  }

  floodFill = e => {
    let [x, y] = this.getXYCoors(e);

    const targetColor = RGBToHex(this.ctx.getImageData(x, y, 1, 1).data);
    const replacementColor = this.currentColor.value;
    if (targetColor === replacementColor) return;
    this.ctx.fillStyle = replacementColor;
    this.ctx.fillRect(x, y, 1, 1);
    let Queue = [];

    Queue.push([x, y]);
    while (Queue.length > 0) {
      if (
        x + 1 > 0 &&
        x + 1 < this.canvas.width &&
        targetColor === RGBToHex(this.ctx.getImageData(x + 1, y, 1, 1).data)
      ) {
        Queue.push([x + 1, y]);
        this.ctx.fillRect(x + 1, y, 1, 1);
      }

      if (
        x - 1 >= 0 &&
        x - 1 < this.canvas.width &&
        targetColor === RGBToHex(this.ctx.getImageData(x - 1, y, 1, 1).data)
      ) {
        Queue.push([x - 1, y]);
        this.ctx.fillRect(x - 1, y, 1, 1);
      }

      if (
        y + 1 > 0 &&
        y + 1 < this.canvas.width &&
        targetColor === RGBToHex(this.ctx.getImageData(x, y + 1, 1, 1).data)
      ) {
        Queue.push([x, y + 1]);
        this.ctx.fillRect(x, y + 1, 1, 1);
      }

      if (
        y - 1 >= 0 &&
        y - 1 < this.canvas.width &&
        targetColor === RGBToHex(this.ctx.getImageData(x, y - 1, 1, 1).data)
      ) {
        Queue.push([x, y - 1]);
        this.ctx.fillRect(x, y - 1, 1, 1);
      }

      Queue.shift(0);
      if (Queue.length > 0) {
        [x, y] = [Queue[0][0], Queue[0][1]];
      }
    }
    Queue = [];
  };

  watchColor(newColor) {
    this.prevColor.value = this.ctx.fillStyle;
    this.ctx.fillStyle = newColor;
    this.currentColor.value = newColor;
  }

  pickerTool(targetTool) {
    if (targetTool === 'picker') {
      this.canvas.addEventListener('click', this.colorPicker);
    } else {
      this.canvas.removeEventListener('click', this.colorPicker);
    }
  }

  colorPicker = e => {
    const [x, y] = this.getXYCoors(e);
    const choosedColor = this.ctx.getImageData(x, y, 1, 1);
    const color = RGBToHex(choosedColor.data);

    this.ctx.fillStyle = color;
    this.currentColor.value = color;
  };

  tools = targetTool => {
    this.pencilTool(targetTool);
    this.bucketTool(targetTool);
    this.pickerTool(targetTool);
  };

  downloadImage(url) {
    const img = new Image();
    img.crossOrigin = 'Anonymous';
    img.src = url;

    let [currentWidth, currentHeight] = [this.canvas.width, this.canvas.height];
    let [x, y] = [0, 0];

    img.addEventListener('load', () => {
      if (img.naturalWidth > img.naturalHeight) {
        const scaleImg = img.naturalWidth / this.canvas.width;
        currentWidth = this.canvas.width;
        currentHeight = img.naturalHeight / scaleImg;
        x = 0;
        y = (this.canvas.height - currentHeight) / 2;
      } else if (img.naturalWidth === img.naturalHeight) {
        currentWidth = this.canvas.width;
        currentHeight = this.canvas.height;
      } else {
        const scaleImg = img.naturalHeight / this.canvas.height;
        currentWidth = img.naturalWidth / scaleImg;
        currentHeight = this.canvas.height;
        x = (this.canvas.width - currentWidth) / 2;
        y = 0;
      }
      this.ctx.imageSmoothingEnabled = false;
      this.ctx.drawImage(img, x, y, currentWidth, currentHeight);
      this.saveInLocalStorage('piskelCloneImg');
    });
  }

  saveCanvas() {
    // create an "off-screen" anchor tag
    const lnk = document.createElement('a');
    // the key here is to set the download attribute of the a tag
    // convert canvas content to data-uri for link.
    lnk.setAttribute('href', this.canvas.toDataURL('image/png;base64'));
    lnk.setAttribute('download', 'myimage.png');
    lnk.style.display = 'none';
    document.body.appendChild(lnk);
    // When download attribute is set the content pointed to by link
    // will be pushed as "download" in HTML5 capable browsers
    lnk.click();
    document.body.removeChild(lnk);
  }

  grayscale() {
    const imageData = this.ctx.getImageData(0, 0, this.canvas.width, this.canvas.height);
    const { data } = imageData;
    for (let i = 0; i < data.length; i += 4) {
      const avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
      data[i] = avg; // red
      data[i + 1] = avg; // green
      data[i + 2] = avg; // blue
    }
    this.ctx.putImageData(imageData, 0, 0);
  }

  getLinkToImage(city) {
    const url = `https://api.unsplash.com/photos/random?query=town,${city}&client_id=e2077ad31a806c894c460aec8f81bc2af4d09c4f8104ae3177bb809faf0eac17`;
    fetch(url)
      .then(res => res.json())
      .then(data => {
        this.downloadImage(data.urls.regular);
      })
      .catch(() => alert('Your limit of 50 images on unsplash.com is end'));
  }
}
