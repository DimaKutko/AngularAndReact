/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/
(() => { // webpackBootstrap
    /******/
    "use strict";
    /******/
    var __webpack_modules__ = ({

        /***/
        "./src/Product.js":
        /*!************************!*\
          !*** ./src/Product.js ***!
          \************************/
        /***/
            ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

            eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Product)\n/* harmony export */ });\nclass Product {\n    constructor(name, price) {\n        this.name = name;\n        this.price = price;\n        this.date = new Date();\n    }\n\n    toString() {\n        return JSON.stringify({\n            name: this.name,\n            price: this.price,\n            date: this.date.toJSON()\n        });\n    }\n}\n\n//# sourceURL=webpack://homework3/./src/Product.js?");

            /***/
        }),

        /***/
        "./src/User.js":
        /*!*********************!*\
          !*** ./src/User.js ***!
          \*********************/
        /***/
            ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

            eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ User)\n/* harmony export */ });\nclass User {\n    constructor(name, surname, age) {\n        this.name = name;\n        this.surname = surname;\n        this.age = age;\n    }\n\n    toString() {\n        return JSON.stringify({\n            name: this.name,\n            surname: this.surname,\n            age: this.age,\n        });\n    }\n}\n\n//# sourceURL=webpack://homework3/./src/User.js?");

            /***/
        }),

        /***/
        "./src/index.js":
        /*!**********************!*\
          !*** ./src/index.js ***!
          \**********************/
        /***/
            ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

            eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Product__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Product */ \"./src/Product.js\");\n/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./User */ \"./src/User.js\");\n\n\n\nconsole.log('Hello from Node.JS');\nconst product = new _Product__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('PC', 20000);\nconsole.log(product.toString());\n\nconst newUser = new _User__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('Dima', 'Kut\\'ko', 21);\nconsole.log(newUser.toString());\n\n//# sourceURL=webpack://homework3/./src/index.js?");

            /***/
        })

        /******/
    });
    /************************************************************************/
    /******/ // The module cache
    /******/
    var __webpack_module_cache__ = {};
    /******/
    /******/ // The require function
    /******/
    function __webpack_require__(moduleId) {
        /******/ // Check if module is in cache
        /******/
        var cachedModule = __webpack_module_cache__[moduleId];
        /******/
        if (cachedModule !== undefined) {
            /******/
            return cachedModule.exports;
            /******/
        }
        /******/ // Create a new module (and put it into the cache)
        /******/
        var module = __webpack_module_cache__[moduleId] = {
            /******/ // no module.id needed
            /******/ // no module.loaded needed
            /******/
            exports: {}
            /******/
        };
        /******/
        /******/ // Execute the module function
        /******/
        __webpack_modules__[moduleId](module, module.exports, __webpack_require__);
        /******/
        /******/ // Return the exports of the module
        /******/
        return module.exports;
        /******/
    }
    /******/
    /************************************************************************/
    /******/
    /* webpack/runtime/define property getters */
    /******/
    (() => {
        /******/ // define getter functions for harmony exports
        /******/
        __webpack_require__.d = (exports, definition) => {
            /******/
            for (var key in definition) {
                /******/
                if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
                    /******/
                    Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
                    /******/
                }
                /******/
            }
            /******/
        };
        /******/
    })();
    /******/
    /******/
    /* webpack/runtime/hasOwnProperty shorthand */
    /******/
    (() => {
        /******/
        __webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
            /******/
    })();
    /******/
    /******/
    /* webpack/runtime/make namespace object */
    /******/
    (() => {
        /******/ // define __esModule on exports
        /******/
        __webpack_require__.r = (exports) => {
            /******/
            if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
                /******/
                Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
                /******/
            }
            /******/
            Object.defineProperty(exports, '__esModule', { value: true });
            /******/
        };
        /******/
    })();
    /******/
    /************************************************************************/
    /******/
    /******/ // startup
    /******/ // Load entry module and return exports
    /******/ // This entry module can't be inlined because the eval devtool is used.
    /******/
    var __webpack_exports__ = __webpack_require__("./src/index.js");
    /******/
    /******/
})();