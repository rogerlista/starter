"use strict";

var usuario = {
  nome: 'Juca',
  idade: 23,
  endereco: {
    cidade: 'Rio de Janeiro',
    estado: 'RJ'
  }
};
console.log(usuario); // {nome: 'Juca', idade: 23, endereco: {cidade: 'Rio de Janeiro, estado: 'RJ'}}

var nomeUsuario = usuario.nome;
var idadeUsuario = usuario.idade;
var cidadeUsuario = usuario.endereco.cidade;
var estadoUsuario = usuario.endereco.estado;
console.log(nomeUsuario, 'idade', idadeUsuario, 'cidade', cidadeUsuario, 'estado', estadoUsuario); // Juca idade 23 cidade Rio de Janeiro estado RJ

var nome = usuario.nome,
    idade = usuario.idade,
    _usuario$endereco = usuario.endereco,
    cidade = _usuario$endereco.cidade,
    estado = _usuario$endereco.estado;
console.log(nome, 'idade', idade, 'cidade', cidade, 'estado', estado); // Juca idade 23 cidade Rio de Janeiro estado RJ

function mostraNome(_ref) {
  var nome = _ref.nome;
  console.log(nome);
}

function mostraEndereco(_ref2) {
  var _ref2$endereco = _ref2.endereco,
      cidade = _ref2$endereco.cidade,
      estado = _ref2$endereco.estado;
  console.log('Cidade', cidade, '-', estado);
}

mostraNome(usuario); // Juca

mostraEndereco(usuario); // Cidade Rio de Janeiro - RJ
