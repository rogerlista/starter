"use strict";

function soma(a, b) {
  return a + b;
}

console.log(soma(1)); // NaN

console.log(soma()); // NaN

function somaComValoresPadrao() {
  var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3;
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 6;
  return a + b;
}

console.log(somaComValoresPadrao(1)); // 7

console.log(somaComValoresPadrao()); // 9

var somaArrowFunction = function somaArrowFunction() {
  var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3;
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 6;
  return a + b;
};

console.log(somaArrowFunction(1)); // 7

console.log(somaArrowFunction()); // 9
