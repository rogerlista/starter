"use strict";

var arr = [1, 3, 4, 5, 8, 10]; // retorna um novo array fazendo alguma coisa com os elementos do array atual.

var newArr = arr.map(function (item, index) {
  return item + index;
});
console.log(newArr); // [1, 4, 6, 8, 12, 15]
// retorna um único valor fazendo alguma coisa com os elementos do array atual.

var sum = arr.reduce(function (total, next) {
  return total + next;
}); // não informando o valor inicial de total ele será 0 por padrão.

console.log(sum); // 31
// retorna um novo array retirando os elementos que forem falsos de acordo com a condição declarada.

var filter = arr.filter(function (item) {
  return item % 2 === 0;
});
console.log(filter); // [4, 8, 10]
// retorna o elemento se encontrar ou indefined.

var find = arr.find(function (item) {
  return item === 4;
});
console.log(find); // 4

var notFind = arr.find(function (item) {
  return item === 2;
});
console.log(notFind); // indefined
// NÃO RECOMENDADO

var teste = function teste() {
  return 'teste';
};

console.log(teste()); // teste

var testeArray = function testeArray() {
  return [1, 2, 3];
};

console.log(testeArray()); // [1, 2, 3]

var testeString = function testeString() {
  return 'Teste';
};

console.log(testeString()); // Teste

var testeNumber = function testeNumber() {
  return 3;
};

console.log(testeNumber()); // 3
// não vai funcionar entende que seja o corpo da função

var testeObjeto = function testeObjeto() {
  nome: 'Juca';
};

console.log(testeObjeto()); // undefined

var testeObjetoCerto = function testeObjetoCerto() {
  return {
    nome: 'Juca'
  };
};

console.log(testeObjetoCerto()); // { nome: 'Juca' }
