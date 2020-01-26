const arr = [1, 3, 4, 5, 6]

const newArr = arr.map(function(item) {
  return item * 3
})

console.log(newArr) // [3, 9, 12, 15, 18]

const newArr2 = arr.map(item => {
  return item * 4
})

console.log(newArr2) // [4, 12, 16, 20, 24]

const newArr3 = arr.map(item => item * 5)

console.log(newArr3) // [5, 15,20, 25, 30]

const teste = () => ({ nome: 'Juca' })

console.log(teste()) // { nome: "Juca"}
