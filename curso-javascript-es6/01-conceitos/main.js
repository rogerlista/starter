const arr = [1, 3, 4, 5, 8, 10]

// retorna um novo array fazendo alguma coisa com os elementos do array atual.
const newArr = arr.map((item, index) => item + index)
console.log(newArr) // [1, 4, 6, 8, 12, 15]

// retorna um único valor fazendo alguma coisa com os elementos do array atual.
const sum = arr.reduce((total, next) => total + next) // não informando o valor inicial de total ele será 0 por padrão.
console.log(sum) // 31

// retorna um novo array retirando os elementos que forem falsos de acordo com a condição declarada.
const filter = arr.filter(item => item % 2 === 0)
console.log(filter) // [4, 8, 10]

// retorna o elemento se encontrar ou indefined.
const find = arr.find(item => item === 4)
console.log(find) // 4

const notFind = arr.find(item => item === 2)
console.log(notFind) // indefined

// NÃO RECOMENDADO
const teste = () => {
  return 'teste'
}

console.log(teste()) // teste

const testeArray = () => [1, 2, 3]
console.log(testeArray()) // [1, 2, 3]

const testeString = () => 'Teste'
console.log(testeString()) // Teste

const testeNumber = () => 3
console.log(testeNumber()) // 3

// não vai funcionar entende que seja o corpo da função
const testeObjeto = () => {
  nome: 'Juca'
}
console.log(testeObjeto()) // undefined

const testeObjetoCerto = () => ({ nome: 'Juca' })
console.log(testeObjetoCerto()) // { nome: 'Juca' }
