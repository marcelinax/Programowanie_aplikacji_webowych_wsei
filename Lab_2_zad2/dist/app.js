/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nexports.__esModule = true;\r\nvar Board_1 = __webpack_require__(/*! ./tic-tac-toe/Board */ \"./src/tic-tac-toe/Board.ts\");\r\nvar App = /** @class */ (function () {\r\n    function App() {\r\n        new Board_1[\"default\"]();\r\n    }\r\n    return App;\r\n}());\r\nnew App();\r\n\n\n//# sourceURL=webpack:///./src/app.ts?");

/***/ }),

/***/ "./src/tic-tac-toe/Board.ts":
/*!**********************************!*\
  !*** ./src/tic-tac-toe/Board.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nexports.__esModule = true;\r\nvar Cell_1 = __webpack_require__(/*! ./Cell */ \"./src/tic-tac-toe/Cell.ts\");\r\nvar Sign_1 = __webpack_require__(/*! ./enums/Sign */ \"./src/tic-tac-toe/enums/Sign.ts\");\r\nvar Board = /** @class */ (function () {\r\n    function Board() {\r\n        var _this = this;\r\n        this.cells = [];\r\n        this.currentSign = Sign_1.Sign.X;\r\n        var cellsElements = document.querySelectorAll(\".cell\");\r\n        cellsElements.forEach(function (cellElement) {\r\n            var cell = new Cell_1[\"default\"](cellElement);\r\n            _this.cells.push(cell);\r\n            cellElement.addEventListener(\"click\", function () {\r\n                _this.makeChoice(cell);\r\n            });\r\n        });\r\n    }\r\n    Board.prototype.makeChoice = function (cell) {\r\n        if (cell.sign !== null)\r\n            return;\r\n        switch (this.currentSign) {\r\n            case Sign_1.Sign.X:\r\n                cell.setSign(this.currentSign);\r\n                this.currentSign = Sign_1.Sign.O;\r\n                break;\r\n            case Sign_1.Sign.O:\r\n                cell.setSign(this.currentSign);\r\n                this.currentSign = Sign_1.Sign.X;\r\n                break;\r\n        }\r\n        this.checkWin();\r\n    };\r\n    Board.prototype.checkWin = function () {\r\n        for (var i = 0; i < 9; i += 3) {\r\n            if (this.cells[i].sign !== null)\r\n                if (this.cells[i].sign === this.cells[i + 1].sign &&\r\n                    this.cells[i + 1].sign === this.cells[i + 2].sign)\r\n                    this.gameOver();\r\n        }\r\n        for (var i = 0; i < 3; i++) {\r\n            if (this.cells[i].sign !== null)\r\n                if (this.cells[i].sign === this.cells[i + 3].sign &&\r\n                    this.cells[i + 3].sign === this.cells[i + 6].sign)\r\n                    this.gameOver();\r\n        }\r\n        if (this.cells[0].sign !== null)\r\n            if (this.cells[0].sign === this.cells[4].sign &&\r\n                this.cells[4].sign === this.cells[8].sign)\r\n                this.gameOver();\r\n        if (this.cells[2].sign !== null)\r\n            if (this.cells[2].sign === this.cells[4].sign &&\r\n                this.cells[4].sign === this.cells[6].sign)\r\n                this.gameOver();\r\n    };\r\n    Board.prototype.gameOver = function () {\r\n        var gameOverElement = document.querySelector(\".game-over-box\");\r\n        if (gameOverElement) {\r\n            switch (this.currentSign) {\r\n                case Sign_1.Sign.X:\r\n                    gameOverElement.innerHTML = \"<h1>O wins!</h2>\";\r\n                    break;\r\n                case Sign_1.Sign.O:\r\n                    gameOverElement.innerHTML = \"<h1>X wins!</h2>\";\r\n                    break;\r\n            }\r\n        }\r\n    };\r\n    return Board;\r\n}());\r\nexports.default = Board;\r\n\n\n//# sourceURL=webpack:///./src/tic-tac-toe/Board.ts?");

/***/ }),

/***/ "./src/tic-tac-toe/Cell.ts":
/*!*********************************!*\
  !*** ./src/tic-tac-toe/Cell.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nexports.__esModule = true;\r\nvar Sign_1 = __webpack_require__(/*! ./enums/Sign */ \"./src/tic-tac-toe/enums/Sign.ts\");\r\nvar Cell = /** @class */ (function () {\r\n    function Cell(cell) {\r\n        this.sign = null;\r\n        this.cell = cell;\r\n    }\r\n    Cell.prototype.setSign = function (sign) {\r\n        this.sign = sign;\r\n        switch (sign) {\r\n            case Sign_1.Sign.X:\r\n                this.cell.innerHTML = \"X\";\r\n                break;\r\n            case Sign_1.Sign.O:\r\n                this.cell.innerHTML = \"O\";\r\n                break;\r\n        }\r\n    };\r\n    return Cell;\r\n}());\r\nexports.default = Cell;\r\n\n\n//# sourceURL=webpack:///./src/tic-tac-toe/Cell.ts?");

/***/ }),

/***/ "./src/tic-tac-toe/enums/Sign.ts":
/*!***************************************!*\
  !*** ./src/tic-tac-toe/enums/Sign.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nexports.__esModule = true;\r\nexports.Sign = void 0;\r\nvar Sign;\r\n(function (Sign) {\r\n    Sign[Sign[\"X\"] = 0] = \"X\";\r\n    Sign[Sign[\"O\"] = 1] = \"O\";\r\n})(Sign = exports.Sign || (exports.Sign = {}));\r\n\n\n//# sourceURL=webpack:///./src/tic-tac-toe/enums/Sign.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.ts");
/******/ 	
/******/ })()
;