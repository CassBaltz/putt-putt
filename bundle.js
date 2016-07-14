/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	const Constants = __webpack_require__(1);
	
	let canvasBoard = document.getElementById("canvasBoard");
	let ctx = canvasBoard.getContext("2d");
	let canvasPower = document.getElementById("canvasPower");
	let ctxPower = canvasPower.getContext("2d");
	let canvasAim = document.getElementById("canvasAim");
	let ctxAim = canvasBoard.getContext("2d");
	
	let ballRadius = Constants.BALL_RADIUS;
	let xPos = Constants.CANVAS_WIDTH/2;
	let yPos = 0 + ballRadius;
	let yHoleStart = Constants.CANVAS_HEIGHT - (3*Constants.HOLE_RADIUS);
	let holeRadius = Constants.HOLE_RADIUS;
	let strokes = 0;
	let mouseX, mouseY;
	window.mouseX
	window.mouseY
	
	canvasBoard.addEventListener("mousedown", (function(e) {
	    filterClick(e);
	}));
	
	window.addEventListener("mousemove", (function(e) {
	  updatePos(e);
	}));
	
	function filterClick(e) {
	  e.preventDefault();
	  if (((xPos - ballRadius) <= e.offsetX && e.offsetX <= (xPos + ballRadius)) && ((yPos - ballRadius) <= e.offsetY && e.offsetY <= (yPos + ballRadius))) {
	    // debugger//run the function to get speed and direction
	    let x = window.mouseX;
	    let y = window.mouseY;
	    swing(x, y)
	  }
	};
	
	function strikeBall(xStart, yStart, xEnd, yEnd) {
	  console.log("striking ball");
	  ctxPower.clearRect(0, 0, Constants.CP_WIDTH, Constants.CP_HEIGHT);
	}
	
	function updatePos(e) {
	  window.mouseX = e.screenX;
	  window.mouseY = e.screenY;
	}
	
	function swing(xInit, yInit) {
	  this.addEventListener("mouseup", (function() {
	    clearInterval(window.drawHitDetailInterval);
	    strikeBall(xInit, yInit, window.mouseX, window.mouseY)
	  }));
	
	  window.drawHitDetailInterval = setInterval(function() {drawHitDetails(xInit, yInit, window.mouseX, window.mouseY)}, 20);
	};
	
	function draw() {
	  ctx.clearRect(0, 0, Constants.CANVAS_WIDTH, Constants.CANVAS_HEIGHT);
	  drawBall();
	  drawHole();
	}
	
	function drawBall() {
	  ctx.beginPath();
	  ctx.arc(xPos, yPos, ballRadius, 0, Math.PI*2);
	  ctx.fillStyle = "white";
	  ctx.fill();
	  ctx.closePath();
	  // setDirection();
	  // setInitialSpeed();
	};
	
	function drawHole() {
	  ctx.beginPath();
	  ctx.arc(xPos, yHoleStart, holeRadius, 0, Math.PI*2);
	  ctx.fillStyle = "black";
	  ctx.fill();
	  ctx.closePath
	}
	
	function drawHitDetails(xPos, yPos, xEnd, yEnd) {
	  // if (xEnd === undefined || yEnd === undefined) {
	  //   xEnd = xPos;
	  //   yEnd = yPos;
	  // }
	  ctxPower.clearRect(0, 0, Constants.CP_WIDTH, Constants.CP_HEIGHT);
	  let xDif = (xEnd > xPos) ? (xEnd - xPos) : (xPos - xEnd);
	  let yDif = (yEnd > yPos) ? (yEnd - yPos) : (yPos - yEnd);
	  let pyth = (xDif * xDif) + (yDif * yDif);
	  let tot = Math.floor(Math.sqrt(pyth));
	
	  ctxPower.beginPath();
	  ctxPower.rect(0, 0, Constants.CP_WIDTH, (tot * 2));
	  ctxPower.fillStyle = "red";
	  ctxPower.fill();
	  ctxPower.closePath();
	}
	
	setInterval(draw, 100);


/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = {
	  CANVAS_WIDTH: 400,
	  CANVAS_HEIGHT: 600,
	  BALL_RADIUS: 10,
	  HOLE_RADIUS: 15,
	  CP_WIDTH: 100,
	  CP_HEIGHT: 300, 
	}


/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map