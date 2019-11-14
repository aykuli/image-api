class Picture {
    constructor(scale, canvas, ctx, currentColor) {
      this.scale = scale;
      this.canvas = canvas;
      this.ctx = ctx;
      this.row = this.canvas.width / this.scale;
      this.column = this.canvas.height / this.scale;
      this.isDrawing = false;
      this.lastX = 0;
      this.lastY = 0;
      this.currentColor = currentColor;
      this.prevColorCache = '#ffffff';
      if (canvas == null) {
        throw new Error("there is no canvas");
      }
    }
  
    emptyCanvas = () => {
      this.ctxData = [];
      for (let i = 0; i < this.row; i += 1) {
        this.ctxData.push([]);
        for (let j = 0; j < this.column; j += 1) {
          this.ctxData[i].push('#ffffff');
        }
      }
      this.loadPrevImage();
    };
  
    clearCanvas() {
      for (let i = 0; i < this.row; i += 1) {
        for (let j = 0; j < this.column; j += 1) {
          this.ctxData[i][j] = '#ffffff';
          this.ctx.fillStyle = this.ctxData[i][j];
          this.ctx.fillRect(i * this.scale, j * this.scale, this.scale, this.scale);
        }
      }
    }
  
    loadPrevImage() {
      for (let i = 0; i < this.row; i += 1) {
        for (let j = 0; j < this.column; j += 1) {
          this.ctx.fillStyle = this.ctxData[j][i];
          this.ctx.fillRect(i * this.scale, j * this.scale, this.scale, this.scale);
        }
      }
    }
  
    localStorageSave() {
      const json = JSON.stringify(this.ctxData);
      localStorage.removeItem('userPaint');
      localStorage.setItem('userPaint', json);
    }
  
    saveCanvas = () => {
      function download(canvas, filename) {
        // create an "off-screen" anchor tag
        const lnk = document.createElement('a');
        // the key here is to set the download attribute of the a tag
        lnk.download = filename;
        // convert canvas content to data-uri for link. When download
        // attribute is set the content pointed to by link will be
        // pushed as "download" in HTML5 capable browsers
        lnk.href = canvas.toDataURL('image/png;base64');https://aykuli.github.io/codejam-palette-public/
        // create a "fake" click-event to trigger the download
        if (document.createEvent) {
          const e = document.createEvent('MouseEvents');
          e.initMouseEvent('click', true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
  
          lnk.dispatchEvent(e);
        } else if (lnk.fireEvent) {
          lnk.fireEvent('onclick');
        }
      }
      download(this.canvas, 'myimage.png');
    };
  
    plot(x, y) {
      this.ctx.fillStyle = this.currentColor.value;
      this.ctx.fillRect((x - 1) * this.scale, (y - 1) * this.scale, this.scale, this.scale);
      this.ctxData[y - 1][x - 1] = this.ctx.fillStyle;
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
  
    draw = e => {
      [this.x2, this.y2] = [Math.ceil(e.offsetX / this.scale), Math.ceil(e.offsetY / this.scale)];
      this.bresenham(this.x1, this.x2, this.y1, this.y2);
      [this.x1, this.y1] = [this.x2, this.y2];
    };
  
    drawOnMouseDown = e => {
      this.isDrawing = true;
      [this.x1, this.y1] = [Math.ceil(e.offsetX / this.scale), Math.ceil(e.offsetY / this.scale)];
      this.plot(this.x1, this.y1);
    };
  
    drawMouseUp = e => {
      [this.x2, this.y2] = [Math.ceil(e.offsetX / this.scale), Math.ceil(e.offsetY / this.scale)];
      this.bresenham(this.x1, this.x2, this.y1, this.y2);
      this.isDrawing = false;
      this.localStorageSave();
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
      [this.lastX, this.lastY] = [Math.ceil(e.offsetX / this.scale), Math.ceil(e.offsetY / this.scale)];
      const colorPrev = this.ctxData[this.lastY - 1][this.lastX - 1];
      const floodFillInner = (x, y, targetColor, scale, canvas) => {
        if (targetColor === colorPrev) return;
        if (this.ctxData[y][x] !== colorPrev) return;
        this.ctxData[y][x] = targetColor;
        this.ctx.fillStyle = targetColor;
        this.ctx.fillRect(x * scale, y * scale, scale, scale);
  
        const around = [{ dx: 0, dy: -1 }, { dx: -1, dy: 0 }, { dx: 1, dy: 0 }, { dx: 0, dy: +1 }];
  
        for (const { dx, dy } of around) {
          if (x + dx >= 0 && x + dx < canvas.width / scale && (y + dy >= 0 && y + dy < canvas.height / scale)) {
            try {
              floodFillInner(x + dx, y + dy, targetColor, scale, canvas);
            } catch (err) {
              setTimeout(() => {
                floodFillInner(x + dx, y + dy, targetColor, scale, canvas);
              }, 0);
            }
          }
        }
      };
      floodFillInner(this.lastX - 1, this.lastY - 1, this.currentColor.value, this.scale, this.canvas);
    };
  
    watchColor(prevColor, newColor) {
      const prevChild = prevColor.children[0];
      prevChild.style.background = this.ctx.fillStyle;
      this.prevColorCache = this.ctx.fillStyle;
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
      const [x, y] = [Math.ceil(e.offsetX / this.scale), Math.ceil(e.offsetY / this.scale)];
      const choosedColor = this.ctxData[y - 1][x - 1];
      this.ctx.fillStyle = choosedColor;
      this.currentColor.value = choosedColor;
    };
  
    tools = targetTool => {
      this.pencilTool(targetTool);
      this.bucketTool(targetTool);
      this.pickerTool(targetTool);
    };
  }
  
  // Start working with index.html
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  const pane = document.querySelector('.pane');
  const currentColor = document.getElementById('currentColor');
  const prevColor = document.querySelector('.color--prev');
  const colorRed = document.querySelector('.color--red');
  const colorBlue = document.querySelector('.color--blue');
  const prevColorCache = '#ffffff';
  prevColor.children[0].style.background = '#ffffff';
  
  const app = new Picture(4, canvas, ctx, currentColor);
  
  // **********   INITIALIZATION    ************ */
  // Initialization process, loading prev image
  window.onload = () => {
    if (localStorage.getItem('userPaint') === null || localStorage.getItem('userPaint') === undefined) {
      app.emptyCanvas();
      localStorage.setItem('userPaint', app.ctxData);
    } else {
      const json = localStorage.getItem('userPaint');
      app.ctxData = JSON.parse(json);
      app.loadPrevImage();
    }
  };
  
  window.onbeforeunload = () => app.localStorageSave();
  // **********   and of INITIALIZATION    ************ */
  
  // ********************    CLEAR CANVAS    *******************/
  const empty = document.getElementById('empty');
  empty.addEventListener('click', app.emptyCanvas);
  // *****************  end of  CLEAR CANVAS    ****************/
  
  // ********************    SAVE IMAGE    *********************/
  const save = document.getElementById('save');
  save.addEventListener('click', app.saveCanvas);
  // *****************  end of  SAVE IMAGE    ******************/
  
  // ********************       TOOLS       *******************/
  let targetTool = 'pencil';
  app.pencilTool(targetTool);
  
  pane.addEventListener('click', e => {
    const targetToolEl = e.target.closest('li');
    if (targetToolEl === null) return;
    targetTool = targetToolEl.id;
    const prevActiveTool = document.querySelector('.tool--active');
    prevActiveTool.classList.remove('tool--active');
    targetToolEl.classList.add('tool--active');
    app.tools(targetTool);
  });
  // ********************    end of TOOLS    *******************/
  
  // ******************    COLOR MANAGING    *******************/
  colorRed.addEventListener('click', () => {
    currentColor.value = '#f74242';
    app.watchColor(prevColor, currentColor.value, false);
  });
  colorBlue.addEventListener('click', () => {
    currentColor.value = '#316cb9';
    app.watchColor(prevColor, currentColor.value, false);
  });
  prevColor.addEventListener('click', () => {
    currentColor.value = prevColorCache;
    app.watchColor(prevColor, currentColor.value, false);
  });
  currentColor.addEventListener('change', app.watchColor(prevColor, currentColor.value, false));
  // *************    end of  COLOR MANAGING      **************/
  
  // ****************    KEYBOARD SHORTCUTS     ****************/
  document.addEventListener('keydown', e => {
    switch (e.code) {
      case 'KeyB':
        targetTool = 'bucket';
        break;
      case 'KeyP':
        targetTool = 'pencil';
        break;
      case 'KeyC':
        targetTool = 'picker';
        break;
      default:
        targetTool = 'pencil';
    }
    const targetToolEl = document.getElementById(targetTool);
    const prevActiveTool = document.querySelector('.tool--active');
    prevActiveTool.classList.remove('tool--active');
    targetToolEl.classList.add('tool--active');
    app.tools(targetTool);
  });
  // ****************  end of  KEYBOARD SHORTCUTS     ****************/
  