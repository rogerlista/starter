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
/******/ 	return __webpack_require__(__webpack_require__.s = "./main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./funcoes.js":
/*!********************!*\
  !*** ./funcoes.js ***!
  \********************/
/*! exports provided: soma, sub, divide, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"soma\", function() { return soma; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"sub\", function() { return sub; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"divide\", function() { return divide; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return multi; });\nfunction soma(a, b) {\n  return a + b;\n}\nfunction sub(a, b) {\n  return a - b;\n}\nfunction divide(a, b) {\n  return a / b;\n} // so pode ter um export default por arquivo\n\nfunction multi(a, b) {\n  return a * b;\n}\n\n//# sourceURL=webpack:///./funcoes.js?");

/***/ }),

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _funcoes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./funcoes */ \"./funcoes.js\");\n/* harmony import */ var _soma__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./soma */ \"./soma.js\");\n // usando export somente só se pode importar entre chaves e com o mesmo nome exportado.\n\n // usando export e dando outro nome as importações\n\n // importando de uma arquivo que contem export default e export somente.\n\n // importando todas as funcões para o objeto funcoes.\n\n // usando export default.\n\n // usando export default pode-se dar qualquer nome a importação.\n\nconsole.log(Object(_funcoes__WEBPACK_IMPORTED_MODULE_0__[\"soma\"])(2, 6)); // 8\n\nconsole.log(Object(_funcoes__WEBPACK_IMPORTED_MODULE_0__[\"sub\"])(5, 2)); // 3\n\nconsole.log(Object(_funcoes__WEBPACK_IMPORTED_MODULE_0__[\"soma\"])(4, 5)); // 9\n\nconsole.log(Object(_funcoes__WEBPACK_IMPORTED_MODULE_0__[\"sub\"])(8, 7)); // 1\n\nconsole.log(Object(_soma__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(10, 2)); // 12\n\nconsole.log(Object(_soma__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(1, 3)); // 4\n\nconsole.log(Object(_funcoes__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(2, 3)); // 6\n\nconsole.log(Object(_funcoes__WEBPACK_IMPORTED_MODULE_0__[\"divide\"])(5, 2)); // 2.5\n\nconsole.log(_funcoes__WEBPACK_IMPORTED_MODULE_0__[\"soma\"](10, 10)); // 20\n\nconsole.log(_funcoes__WEBPACK_IMPORTED_MODULE_0__[\"sub\"](20, 5)); // 15\n\nconsole.log(_funcoes__WEBPACK_IMPORTED_MODULE_0__[\"divide\"](10, 5)); // 2\n// console.log(funcoes.multi(10, 3)) // multi não pode ser exportada dessa maneira somente como default.\n\nconsole.log(_funcoes__WEBPACK_IMPORTED_MODULE_0__[\"default\"](10, 3)); // 30 - multi só pode ser chamada como default.\n\n//# sourceURL=webpack:///./main.js?");

/***/ }),

/***/ "./soma.js":
/*!*****************!*\
  !*** ./soma.js ***!
  \*****************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return soma2; });\nfunction soma2(a, b) {\n  return a + b;\n}\n\n//# sourceURL=webpack:///./soma.js?");

/***/ })

/******/ });