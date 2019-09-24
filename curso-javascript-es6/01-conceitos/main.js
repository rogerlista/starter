const arr = [1, 3, 4, 5, 8, 10]

// retorna um novo array fazendo alguma coisa com os elementos do array atual.
const newArr = arr.map(function(item, index) {
  return item + index
})

console.log(newArr) // [1, 4, 6, 8, 12, 15]

// retorna um único valor fazendo alguma coisa com os elementos do array atual.
const sum = arr.reduce(function(total, next) {
  return total + next
}, 0) // não informando o valor inicial de total ele será 0 por padrão.

console.log(sum) // 31

// retorna um novo array retirando os elementos que forem falsos de acordo com a condição declarada.
const filter = arr.filter(function(item) {
  return item % 2 === 0
})

console.log(filter) // [4, 8, 10]

// retorna o elemento se encontrar ou indefined.
const find = arr.find(function(item) {
  return item === 4
})

console.log(find) // 4

const notFind = arr.find(function(item) {
  return item === 2
})

console.log(notFind) // indefined
