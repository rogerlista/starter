const arr = [1, 3, 4, 5, 8, 9]

const newArr = arr.map(function(item) {
  return item * 2
})

console.log(newArr) // [2, 6, 8, 10, 16, 18]

const newArr2 = arr.map(function(item, index) {
  return item + index
})

console.log(newArr2) // [1, 4, 6, 8, 12, 14]

const sum = arr.reduce(function(total, proximo) {
  return total + proximo
})

console.log(sum) // 30

const sum2 = arr.reduce(function(total, proximo) {
  return total + proximo
}, 5) // inícia total com o valor 5

console.log(sum2) // 35

const pares = arr.filter(function(item) {
  return item % 2 === 0
})

console.log(pares) // [4, 8]

const encontrou = arr.find(function(item) {
  return item === 4
})

console.log(encontrou) // 4

const naoEncontrou = arr.find(function(item) {
  return item === 2
})

console.log(naoEncontrou) // undefined
