/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sass_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sass/style.scss */ \"./src/sass/style.scss\");\n/* harmony import */ var _sass_style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sass_style_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _scripts_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/index.js */ \"./src/scripts/index.js\");\n\n\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/sass/style.scss":
/*!*****************************!*\
  !*** ./src/sass/style.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/sass/style.scss?");

/***/ }),

/***/ "./src/scripts/Picture.js":
/*!********************************!*\
  !*** ./src/scripts/Picture.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Picture; });\n/* harmony import */ var _RGBToHex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RGBToHex */ \"./src/scripts/RGBToHex.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === \"[object Arguments]\")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar Picture =\n/*#__PURE__*/\nfunction () {\n  function Picture(canvas, ctx, currentColor, size, prevColor) {\n    var _this = this;\n\n    _classCallCheck(this, Picture);\n\n    _defineProperty(this, \"windowReload\", function () {\n      if (localStorage.getItem('piskelCloneImg') !== null) {\n        var img = new Image();\n        var dataURI = localStorage.getItem('piskelCloneImg');\n        img.src = \"data:image/png;base64,\".concat(dataURI);\n        img.addEventListener('load', function () {\n          return _this.ctx.drawImage(img, 0, 0);\n        });\n      }\n\n      if (localStorage.getItem('piskelCloneResolution') !== null) {\n        _this.size = Number(localStorage.getItem('piskelCloneResolution'));\n        var _ref = [_this.size, _this.size];\n        _this.canvas.width = _ref[0];\n        _this.canvas.height = _ref[1];\n        var currentRes = document.querySelector('.res-active');\n        currentRes.classList.remove('res-active');\n        var target = document.querySelector(\"#res\".concat(_this.size));\n        target.classList.add('res-active');\n      }\n    });\n\n    _defineProperty(this, \"bresenham\", function (x1, x2, y1, y2) {\n      var innerX1 = x1,\n          innerY1 = y1;\n      var innerX2 = x2,\n          innerY2 = y2;\n      if (!_this.isDrawing) return;\n      _this.isDrawing = true;\n      var deltaX = Math.abs(x2 - x1);\n      var deltaY = Math.abs(y2 - y1);\n      var signX = x1 < x2 ? 1 : -1;\n      var signY = y1 < y2 ? 1 : -1;\n      var err = deltaX - deltaY;\n\n      _this.plot(innerX2, innerY2);\n\n      while (innerX1 !== innerX2 || innerY1 !== innerY2) {\n        _this.plot(innerX1, innerY1);\n\n        var err2 = err * 2;\n\n        if (err2 > -deltaY) {\n          err -= deltaY;\n          innerX1 += signX;\n        }\n\n        if (err2 < deltaX) {\n          err += deltaX;\n          innerY1 += signY;\n        }\n      }\n    });\n\n    _defineProperty(this, \"draw\", function (e) {\n      if (_this.isDrawing) {\n        var _this$getXYCoors = _this.getXYCoors(e);\n\n        var _this$getXYCoors2 = _slicedToArray(_this$getXYCoors, 2);\n\n        _this.x2 = _this$getXYCoors2[0];\n        _this.y2 = _this$getXYCoors2[1];\n\n        _this.bresenham(_this.x1, _this.x2, _this.y1, _this.y2);\n\n        var _ref2 = [_this.x2, _this.y2];\n        _this.x1 = _ref2[0];\n        _this.y1 = _ref2[1];\n      }\n    });\n\n    _defineProperty(this, \"drawOnMouseDown\", function (e) {\n      _this.isDrawing = true;\n\n      var _this$getXYCoors3 = _this.getXYCoors(e);\n\n      var _this$getXYCoors4 = _slicedToArray(_this$getXYCoors3, 2);\n\n      _this.x1 = _this$getXYCoors4[0];\n      _this.y1 = _this$getXYCoors4[1];\n\n      _this.plot(_this.x1, _this.y1);\n    });\n\n    _defineProperty(this, \"drawMouseUp\", function (e) {\n      var _this$getXYCoors5 = _this.getXYCoors(e);\n\n      var _this$getXYCoors6 = _slicedToArray(_this$getXYCoors5, 2);\n\n      _this.x2 = _this$getXYCoors6[0];\n      _this.y2 = _this$getXYCoors6[1];\n\n      _this.bresenham(_this.x1, _this.x2, _this.y1, _this.y2);\n\n      _this.isDrawing = false;\n\n      _this.saveInLocalStorage('piskelCloneImg');\n    });\n\n    _defineProperty(this, \"pencilTool\", function (targetTool) {\n      if (targetTool === 'pencil') {\n        _this.canvas.addEventListener('mousemove', _this.draw);\n\n        _this.canvas.addEventListener('mousedown', _this.drawOnMouseDown);\n\n        _this.canvas.addEventListener('mouseup', _this.drawMouseUp);\n\n        _this.canvas.addEventListener('mouseout', function () {\n          _this.isDrawing = false;\n        });\n      } else {\n        _this.canvas.removeEventListener('mousemove', _this.draw);\n\n        _this.canvas.removeEventListener('mousedown', _this.drawOnMouseDown);\n\n        _this.canvas.removeEventListener('mouseup', _this.drawMouseUp);\n      }\n    });\n\n    _defineProperty(this, \"floodFill\", function (e) {\n      var _this$getXYCoors7 = _this.getXYCoors(e),\n          _this$getXYCoors8 = _slicedToArray(_this$getXYCoors7, 2),\n          x = _this$getXYCoors8[0],\n          y = _this$getXYCoors8[1];\n\n      var targetColor = Object(_RGBToHex__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_this.ctx.getImageData(x, y, 1, 1).data);\n      var replacementColor = _this.currentColor.value;\n      if (targetColor === replacementColor) return;\n      _this.ctx.fillStyle = replacementColor;\n\n      _this.ctx.fillRect(x, y, 1, 1);\n\n      var Queue = [];\n      Queue.push([x, y]);\n\n      while (Queue.length > 0) {\n        if (x + 1 > 0 && x + 1 < _this.canvas.width && targetColor === Object(_RGBToHex__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_this.ctx.getImageData(x + 1, y, 1, 1).data)) {\n          Queue.push([x + 1, y]);\n\n          _this.ctx.fillRect(x + 1, y, 1, 1);\n        }\n\n        if (x - 1 >= 0 && x - 1 < _this.canvas.width && targetColor === Object(_RGBToHex__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_this.ctx.getImageData(x - 1, y, 1, 1).data)) {\n          Queue.push([x - 1, y]);\n\n          _this.ctx.fillRect(x - 1, y, 1, 1);\n        }\n\n        if (y + 1 > 0 && y + 1 < _this.canvas.width && targetColor === Object(_RGBToHex__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_this.ctx.getImageData(x, y + 1, 1, 1).data)) {\n          Queue.push([x, y + 1]);\n\n          _this.ctx.fillRect(x, y + 1, 1, 1);\n        }\n\n        if (y - 1 >= 0 && y - 1 < _this.canvas.width && targetColor === Object(_RGBToHex__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_this.ctx.getImageData(x, y - 1, 1, 1).data)) {\n          Queue.push([x, y - 1]);\n\n          _this.ctx.fillRect(x, y - 1, 1, 1);\n        }\n\n        Queue.shift(0);\n\n        if (Queue.length > 0) {\n          var _ref3 = [Queue[0][0], Queue[0][1]];\n          x = _ref3[0];\n          y = _ref3[1];\n        }\n      }\n\n      Queue = [];\n    });\n\n    _defineProperty(this, \"colorPicker\", function (e) {\n      var _this$getXYCoors9 = _this.getXYCoors(e),\n          _this$getXYCoors10 = _slicedToArray(_this$getXYCoors9, 2),\n          x = _this$getXYCoors10[0],\n          y = _this$getXYCoors10[1];\n\n      var choosedColor = _this.ctx.getImageData(x, y, 1, 1);\n\n      var color = Object(_RGBToHex__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(choosedColor.data);\n      _this.ctx.fillStyle = color;\n      _this.currentColor.value = color;\n    });\n\n    _defineProperty(this, \"tools\", function (targetTool) {\n      _this.pencilTool(targetTool);\n\n      _this.bucketTool(targetTool);\n\n      _this.pickerTool(targetTool);\n    });\n\n    this.canvas = canvas;\n    this.ctx = ctx;\n    this.isDrawing = false;\n    this.currentColor = currentColor;\n    this.prevColorCache = '#ffffff';\n    this.size = size;\n    this.prevColor = prevColor;\n\n    if (canvas == null) {\n      throw new Error('there is no canvas');\n    }\n  }\n\n  _createClass(Picture, [{\n    key: \"saveInLocalStorage\",\n    value: function saveInLocalStorage(localStorageKey) {\n      localStorage.removeItem(localStorageKey);\n      var dataURI = this.canvas.toDataURL('image/png').replace(/^data:image\\/(png|jpg);base64,/, '');\n      localStorage.setItem(localStorageKey, dataURI);\n    }\n  }, {\n    key: \"plot\",\n    value: function plot(x, y) {\n      this.ctx.imageSmoothingEnabled = false;\n      this.ctx.fillStyle = this.currentColor.value;\n      this.ctx.fillRect(x, y, 1, 1);\n    } // Bresenham algorithm\n\n  }, {\n    key: \"getXYCoors\",\n    value: function getXYCoors(e) {\n      return [Math.ceil(e.offsetX / 512 * this.size), Math.ceil(e.offsetY / 512 * this.size)];\n    }\n  }, {\n    key: \"bucketTool\",\n    value: function bucketTool(targetTool) {\n      if (targetTool === 'bucket') {\n        this.canvas.addEventListener('mousedown', this.floodFill);\n      } else {\n        this.canvas.removeEventListener('mousedown', this.floodFill);\n      }\n    }\n  }, {\n    key: \"watchColor\",\n    value: function watchColor(newColor) {\n      this.prevColor.value = this.ctx.fillStyle;\n      this.ctx.fillStyle = newColor;\n      this.currentColor.value = newColor;\n    }\n  }, {\n    key: \"pickerTool\",\n    value: function pickerTool(targetTool) {\n      if (targetTool === 'picker') {\n        this.canvas.addEventListener('click', this.colorPicker);\n      } else {\n        this.canvas.removeEventListener('click', this.colorPicker);\n      }\n    }\n  }, {\n    key: \"downloadImage\",\n    value: function downloadImage(url) {\n      var _this2 = this;\n\n      var img = new Image();\n      img.crossOrigin = 'Anonymous';\n      img.src = url;\n      var _ref4 = [this.canvas.width, this.canvas.height],\n          currentWidth = _ref4[0],\n          currentHeight = _ref4[1];\n      var x = 0,\n          y = 0;\n      img.addEventListener('load', function () {\n        if (img.naturalWidth > img.naturalHeight) {\n          var scaleImg = img.naturalWidth / _this2.canvas.width;\n          currentWidth = _this2.canvas.width;\n          currentHeight = img.naturalHeight / scaleImg;\n          x = 0;\n          y = (_this2.canvas.height - currentHeight) / 2;\n        } else if (img.naturalWidth === img.naturalHeight) {\n          currentWidth = _this2.canvas.width;\n          currentHeight = _this2.canvas.height;\n        } else {\n          var _scaleImg = img.naturalHeight / _this2.canvas.height;\n\n          currentWidth = img.naturalWidth / _scaleImg;\n          currentHeight = _this2.canvas.height;\n          x = (_this2.canvas.width - currentWidth) / 2;\n          y = 0;\n        }\n\n        _this2.ctx.imageSmoothingEnabled = false;\n\n        _this2.ctx.drawImage(img, x, y, currentWidth, currentHeight);\n\n        _this2.saveInLocalStorage('piskelCloneImg');\n      });\n    }\n  }, {\n    key: \"saveCanvas\",\n    value: function saveCanvas() {\n      // create an \"off-screen\" anchor tag\n      var lnk = document.createElement('a'); // the key here is to set the download attribute of the a tag\n      // convert canvas content to data-uri for link.\n\n      lnk.setAttribute('href', this.canvas.toDataURL('image/png;base64'));\n      lnk.setAttribute('download', 'myimage.png');\n      lnk.style.display = 'none';\n      document.body.appendChild(lnk); // When download attribute is set the content pointed to by link\n      // will be pushed as \"download\" in HTML5 capable browsers\n\n      lnk.click();\n      document.body.removeChild(lnk);\n    }\n  }, {\n    key: \"grayscale\",\n    value: function grayscale() {\n      var imageData = this.ctx.getImageData(0, 0, this.canvas.width, this.canvas.height);\n      var data = imageData.data;\n\n      for (var i = 0; i < data.length; i += 4) {\n        var avg = (data[i] + data[i + 1] + data[i + 2]) / 3;\n        data[i] = avg; // red\n\n        data[i + 1] = avg; // green\n\n        data[i + 2] = avg; // blue\n      }\n\n      this.ctx.putImageData(imageData, 0, 0);\n    }\n  }, {\n    key: \"getLinkToImage\",\n    value: function getLinkToImage(city) {\n      var _this3 = this;\n\n      var url = \"https://api.unsplash.com/photos/random?query=town,\".concat(city, \"&client_id=e2077ad31a806c894c460aec8f81bc2af4d09c4f8104ae3177bb809faf0eac17\");\n      fetch(url).then(function (res) {\n        return res.json();\n      }).then(function (data) {\n        _this3.downloadImage(data.urls.regular);\n      })[\"catch\"](function () {\n        return alert('Your limit of 50 images on unsplash.com is end');\n      });\n    }\n  }]);\n\n  return Picture;\n}();\n\n\n\n//# sourceURL=webpack:///./src/scripts/Picture.js?");

/***/ }),

/***/ "./src/scripts/RGBToHex.js":
/*!*********************************!*\
  !*** ./src/scripts/RGBToHex.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return RGBToHex; });\nfunction RGBToHex(data) {\n  var dataHex = '#';\n\n  for (var i = 0; i < 3; i += 1) {\n    var color = data[i];\n    var letter = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];\n    var firstLetter = letter[Math.floor(color / 16)];\n    var secondLetter = letter[color % 16];\n    dataHex = dataHex + firstLetter + secondLetter;\n  }\n\n  return dataHex;\n}\n\n//# sourceURL=webpack:///./src/scripts/RGBToHex.js?");

/***/ }),

/***/ "./src/scripts/index.js":
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Picture__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Picture */ \"./src/scripts/Picture.js\");\n // Taking elements from index.html\n\nvar canvas = document.querySelector('#canvas');\nvar ctx = canvas.getContext('2d');\nvar paneTools = document.querySelector('.pane__tools');\nvar currentColor = document.querySelector('#currentColor');\nvar prevColor = document.querySelector('#prevColor');\nvar colorRed = document.querySelector('.color--red');\nvar colorBlue = document.querySelector('.color--blue');\nvar cityChoiseInpit = document.querySelector('#cityChoiseInpit');\nvar load = document.querySelector('#load');\nctx.imageSmoothingEnabled = false;\n\nif (localStorage.getItem('isImgLoaded') === null) {\n  localStorage.setItem('isImgLoaded', 'false');\n}\n\nvar modalLoadImg = document.querySelector('.modal__no-image');\nvar modalOverlay = document.querySelector('.modal__overlay');\n\nfunction popupToggle() {\n  var isToAdd = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;\n\n  if (localStorage.getItem('isImgLoaded') === 'false') {\n    modalLoadImg.classList.remove('display-block');\n    modalOverlay.classList.remove('display-block');\n  }\n\n  if (isToAdd) {\n    modalLoadImg.classList.add('display-block');\n    modalOverlay.classList.add('display-block');\n  }\n}\n\nvar generalSize = 512; // Creating app\n\nvar app = new _Picture__WEBPACK_IMPORTED_MODULE_0__[\"default\"](canvas, ctx, currentColor, generalSize, prevColor);\nwindow.addEventListener('load', app.windowReload());\n\nwindow.onbeforeunload = function () {\n  return app.saveInLocalStorage('piskelCloneImg');\n}; // default tool, when user comes fisrt time on page\n// and his localStorage don't have 'piskelCloneImg' and 'piskelCloneResolution'\n\n\nvar targetTool = 'pencil';\napp.pencilTool(targetTool); // pane tools\n\npaneTools.addEventListener('click', function (e) {\n  var targetToolEl = e.target.closest('li');\n  if (targetToolEl === null) return;\n  targetTool = targetToolEl.id;\n  var prevActiveTool = document.querySelector('.tool--active');\n\n  switch (targetTool) {\n    case 'empty':\n      ctx.clearRect(0, 0, canvas.width, canvas.height);\n      localStorage.removeItem('isImgLoaded');\n      localStorage.setItem('isImgLoaded', 'false');\n      targetTool = 'pencil';\n      break;\n\n    case 'grayscale':\n      localStorage.getItem('isImgLoaded') === 'true' ? app.grayscale() : popupToggle(true);\n      break;\n\n    default:\n      prevActiveTool.classList.remove('tool--active');\n      targetToolEl.classList.add('tool--active');\n      app.tools(targetTool);\n  }\n}); // modal popup appear when user click on grayscale but image of city doesn't loaded yet\n\nmodalOverlay.addEventListener('click', function () {\n  return popupToggle();\n}); // color managing\n\nvar constColorPalette = ['#f74242', '#316cb9'];\ncolorRed.addEventListener('click', function () {\n  return app.watchColor(constColorPalette[0]);\n});\ncolorBlue.addEventListener('click', function () {\n  return app.watchColor(constColorPalette[1]);\n});\nprevColor.addEventListener('click', function () {\n  return app.watchColor(currentColor.value);\n});\ncurrentColor.addEventListener('change', function () {\n  return app.watchColor(currentColor.value);\n}); // saving image on hard drive\n\nvar save = document.querySelector('#save');\nsave.addEventListener('click', function () {\n  return app.saveCanvas();\n}); // keyboard shortcuts\n\nwindow.addEventListener('keydown', function (e) {\n  switch (e.code) {\n    case 'KeyB':\n      e.preventDefault();\n      targetTool = 'bucket';\n      break;\n\n    case 'KeyP':\n      e.preventDefault();\n      targetTool = 'pencil';\n      break;\n\n    case 'KeyC':\n      e.preventDefault();\n      targetTool = 'picker';\n      break;\n\n    case 'Escape':\n      popupToggle();\n      break;\n\n    default:\n      return;\n  }\n\n  if (targetTool !== 'grayscale') {\n    var targetToolEl = document.querySelector(\"#\".concat(targetTool));\n    var prevActiveTool = document.querySelector('.tool--active');\n    prevActiveTool.classList.remove('tool--active');\n    targetToolEl.classList.add('tool--active');\n    app.tools(targetTool);\n  }\n}); // user changing canvas resolution\n\nvar handleOnload = function handleOnload(_ref) {\n  var img = _ref.target;\n  var _ref2 = [canvas.width, canvas.height],\n      currentWidth = _ref2[0],\n      currentHeight = _ref2[1];\n  var x = 0,\n      y = 0;\n\n  if (img.naturalWidth > img.naturalHeight) {\n    var scaleImg = img.naturalWidth / canvas.width;\n    currentWidth = canvas.width;\n    currentHeight = img.naturalHeight / scaleImg;\n    x = 0;\n    y = (canvas.height - currentHeight) / 2;\n  } else if (img.naturalWidth === img.naturalHeight) {\n    currentWidth = canvas.width;\n    currentHeight = canvas.height;\n  } else {\n    var _scaleImg = img.naturalHeight / canvas.height;\n\n    currentWidth = img.naturalWidth / _scaleImg;\n    currentHeight = canvas.height;\n    x = (canvas.width - currentWidth) / 2;\n    y = 0;\n  }\n\n  ctx.imageSmoothingEnabled = false;\n  ctx.drawImage(img, x, y, currentWidth, currentHeight);\n};\n\nvar canvasResolution = document.querySelector('.canvas__resolution');\ncanvasResolution.addEventListener('click', function (e) {\n  localStorage.removeItem('piskelCloneResolution');\n  var ratio = Number(e.target.dataset.ratio);\n  app.size = generalSize / ratio;\n  app.saveInLocalStorage('piskelCloneImg');\n  localStorage.setItem('piskelCloneResolution', app.size);\n  var _ref3 = [app.size, app.size];\n  canvas.width = _ref3[0];\n  canvas.height = _ref3[1];\n  var currentRes = document.querySelector('.res-active');\n  currentRes.classList.remove('res-active');\n  e.target.classList.add('res-active');\n  var img = new Image();\n  var dataURI = localStorage.getItem('piskelCloneImg');\n  img.src = \"data:image/png;base64,\".concat(dataURI);\n  img.onload = handleOnload;\n}); // user load image from unsplash\n\nload.addEventListener('click', function () {\n  var city = cityChoiseInpit.value;\n  ctx.clearRect(0, 0, canvas.width, canvas.height);\n  app.getLinkToImage(city); // when limit on unsplash.com ends this block of code can help to view functionality\n  // const url =\n  //   'https://image.shutterstock.com/z/stock-vector-vector-illustration-in-simple-flat-linear-style-with-smiling-cartoon-characters-teamwork-and-1369217765.jpg';\n  // app.downloadImage(url);\n\n  localStorage.removeItem('isImgLoaded');\n  localStorage.setItem('isImgLoaded', 'true');\n});\n\n//# sourceURL=webpack:///./src/scripts/index.js?");

/***/ })

/******/ });