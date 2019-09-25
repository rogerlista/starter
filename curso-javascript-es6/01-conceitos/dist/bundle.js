"use strict";

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var usuario = {
  nome: 'Juca',
  idade: 25,
  empresa: 'Rocketseat'
};

var nome = usuario.nome,
    resto = _objectWithoutProperties(usuario, ["nome"]);

console.log(nome, resto); // Juca, { idade: 25, empresa: 'Rocketseat' }

var arr = [1, 2, 3, 4];
var a = arr[0],
    b = arr[1],
    c = arr.slice(2);
console.log(a, b, c); // 1, 2, [3, 4]

function soma(a, b) {
  return a + b;
}

console.log(soma(2, 3)); // 5

function somaParams() {
  for (var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++) {
    params[_key] = arguments[_key];
  }

  return params;
}

console.log(somaParams(1, 2, 3, 4, 5)); // [1, 2, 3, 4, 5]

function somaParamsReduce() {
  for (var _len2 = arguments.length, params = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    params[_key2] = arguments[_key2];
  }

  return params.reduce(function (total, next) {
    return total + next;
  });
}

console.log(somaParamsReduce(1, 2, 3, 4, 5)); // 15

function somaComParams(a, b) {
  for (var _len3 = arguments.length, params = new Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
    params[_key3 - 2] = arguments[_key3];
  }

  console.log(a, b, params);
}

somaComParams(1, 2, 3, 4, 5); // 1, 2, [3, 4, 5]
