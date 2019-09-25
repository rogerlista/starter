// 3.1
const arr = [1, 2, 3, 4, 5]

console.log(
  'com function',
  arr.map(function(item) {
    return item + 10
  })
) // com function [11, 12, 13, 14, 15]
console.log('com arrow', arr.map(item => item + 10)) // com arrow [11, 12, 13, 14, 15]

// 3.2
const usuario = { nome: 'Juca', idade: 25 }

function mostraIdade(usuario) {
  return usuario.idade
}
console.log('com function', mostraIdade(usuario)) // com function 23

const mostraNome = usuario => usuario.nome
console.log('com arrow', mostraNome(usuario)) // com arrow Juca

// 3.3
const nome = 'Juca'
const idade = 25

function mostraUsuario(nome = 'Juca', idade = 18) {
  return { nome, idade }
}

console.log(mostraUsuario(nome, idade)) // { nome: 'Juca', idade: 25 }
console.log(mostraUsuario(nome)) // { nome: 'Juca', idade: 18 }

const mostraUsuarioArrow = (nome = 'Teobaldo', idade = 27) => ({ nome, idade })

console.log(mostraUsuarioArrow(nome, idade)) // { nome: 'Juca', idade 25 }
console.log(mostraUsuarioArrow(nome)) // { nome: 'Juca', idade: 27 }

// 3.4
const promise = function() {
  return new Promise(function(resolve, reject) {
    return resolve('com function')
  })
}

promise().then(function(resp) {
  console.log(resp) // com function
})

const promiseArrow = () =>
  new Promise((resolve, reject) => resolve('com arrow'))

promiseArrow().then(resp => console.log(resp)) // com arrow
