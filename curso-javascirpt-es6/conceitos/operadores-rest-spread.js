/*
    REST
*/

const usuario = {
  nome: 'Juca',
  idade: '38',
  empresa: 'Rocketseat'
}
const { nome, ...resto } = usuario

console.log(nome, resto) // Juca {idade: "38", empresa: "Rocketseat"}

const arr = [1, 3, 4, 5, 8, 9]
const [a, b, ...c] = arr

console.log(a, b, c) // 1 3 [4, 5, 8, 9]

function soma(a, b, ...resto) {
  const seTiver = resto.reduce((total, proximo) => total + proximo, 0)
  return a + b + seTiver
}

console.log(soma(2, 4)) // 6
console.log(soma(3, 1, 8, 9, 3)) // 24

function soma2(...valores) {
  return valores.reduce((total, item) => total + item, 0)
}

console.log(soma2()) // 0
console.log(soma2(3)) // 3
console.log(soma2(8, 3)) // 11
console.log(soma2(8, 3, 3, 9, 1)) // 24

/*
    Spread
*/

const array1 = [1, 2, 3, 4]
const array2 = [5, 6, 7, 8]
const array3 = [...array1, ...array2]

console.log(array3) // [1, 2, 3, 4, 5, 6, 7, 8]

const cliente = {
  nome: 'Jucalina',
  idade: 28,
  empresa: 'Rocketseat'
}

const cliente2 = { ...cliente, nome: 'Teobaldo' }

console.log(cliente2) // {nome: "Teobaldo", idade: 28, empresa: "Rocketseat"}
console.log(cliente) // {nome: "Jucalina", idade: 28, empresa: "Rocketseat"}
