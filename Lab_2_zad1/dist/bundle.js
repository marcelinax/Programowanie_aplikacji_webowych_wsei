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

/***/ "./src/animal.ts":
/*!***********************!*\
  !*** ./src/animal.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nexports.__esModule = true;\r\nvar Animal = /** @class */ (function () {\r\n    function Animal(theName) {\r\n        this.name = theName;\r\n    }\r\n    Animal.prototype.move = function (distanceInMeters) {\r\n        if (distanceInMeters === void 0) { distanceInMeters = 0; }\r\n        console.log(this.name + \" moved \" + distanceInMeters + \"m.\");\r\n    };\r\n    return Animal;\r\n}());\r\nexports.default = Animal;\r\n\n\n//# sourceURL=webpack:///./src/animal.ts?");

/***/ }),

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nexports.__esModule = true;\r\nvar horse_1 = __webpack_require__(/*! ./horse */ \"./src/horse.ts\");\r\nvar snake_1 = __webpack_require__(/*! ./snake */ \"./src/snake.ts\");\r\nvar App = /** @class */ (function () {\r\n    // TO JEST JAKBY NASZ MAIN\r\n    function App() {\r\n        console.log(1);\r\n        var sam = new snake_1[\"default\"](\"Sammy the Python\");\r\n        var tom = new horse_1[\"default\"](\"Tommy the Palomino\");\r\n        sam.move();\r\n        tom.move(34);\r\n    }\r\n    return App;\r\n}());\r\nvar app = new App();\r\nexports.default = app;\r\n\n\n//# sourceURL=webpack:///./src/app.ts?");

/***/ }),

/***/ "./src/horse.ts":
/*!**********************!*\
  !*** ./src/horse.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        if (typeof b !== \"function\" && b !== null)\r\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nexports.__esModule = true;\r\nvar animal_1 = __webpack_require__(/*! ./animal */ \"./src/animal.ts\");\r\nvar Horse = /** @class */ (function (_super) {\r\n    __extends(Horse, _super);\r\n    function Horse(name) {\r\n        return _super.call(this, name) || this;\r\n    }\r\n    Horse.prototype.move = function (distanceInMeters) {\r\n        if (distanceInMeters === void 0) { distanceInMeters = 45; }\r\n        console.log(\"Galloping...\");\r\n        _super.prototype.move.call(this, distanceInMeters);\r\n    };\r\n    return Horse;\r\n}(animal_1[\"default\"]));\r\nexports.default = Horse;\r\n\n\n//# sourceURL=webpack:///./src/horse.ts?");

/***/ }),

/***/ "./src/snake.ts":
/*!**********************!*\
  !*** ./src/snake.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        if (typeof b !== \"function\" && b !== null)\r\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nexports.__esModule = true;\r\nvar animal_1 = __webpack_require__(/*! ./animal */ \"./src/animal.ts\");\r\nvar Snake = /** @class */ (function (_super) {\r\n    __extends(Snake, _super);\r\n    function Snake(name) {\r\n        return _super.call(this, name) || this;\r\n    }\r\n    Snake.prototype.move = function (distanceInMeters) {\r\n        if (distanceInMeters === void 0) { distanceInMeters = 5; }\r\n        console.log(\"Slithering...\");\r\n        _super.prototype.move.call(this, distanceInMeters);\r\n    };\r\n    return Snake;\r\n}(animal_1[\"default\"]));\r\nexports.default = Snake;\r\n\n\n//# sourceURL=webpack:///./src/snake.ts?");

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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