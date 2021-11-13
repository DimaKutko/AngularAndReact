/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/statistics.js":
/*!***************************!*\
  !*** ./src/statistics.js ***!
  \***************************/
/***/ (() => {

eval("function createStatistics() {\n    let counter = 0;\n    const listner = () => counter++;\n\n    document.addEventListener('click', listner);\n\n    return {\n        getClicks() {\n            return counter;\n        },\n        removeClicks() {\n            return counter = 0;\n        }\n    }\n}\n\nwindow.statistics = createStatistics();\n\n//# sourceURL=webpack://homework3/./src/statistics.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/statistics.js"]();
/******/ 	
/******/ })()
;