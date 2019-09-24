"use strict";

var a = 3; // a = 6 // constantes não podem receber novos valores - read-only

var usuario = {
  nome: 'Juca'
};
console.log(usuario); // nome: 'Juca'

usuario.nome = 'Teobaldo'; // mutar/mutando uma constante

console.log(usuario); // nome: 'Teobaldo'
// escopos

function teste(x) {
  var y = 2;
  var z = 4;

  if (x > 5) {
    var _z = 8; // nova abertura de chaves novo escopo, nova variável z sobrepõem a variável z externa.

    console.log(x, y, _z);
  }
} // console.log(y) // a variável y só pode ser acessada dentro/escopo da função.


teste(10); // 10 2 8
