const usuario = {
  nome: 'Juca',
  idade: 25,
  empresa: 'Rocketseat'
}
const { nome, ...resto } = usuario

console.log(nome, resto) // Juca, { idade: 25, empresa: 'Rocketseat' }

const arr = [1, 2, 3, 4]
const [a, b, ...c] = arr

console.log(a, b, c) // 1, 2, [3, 4]

function soma(a, b) {
  return a + b
}

console.log(soma(2, 3)) // 5

function somaParams(...params) {
  return params
}

console.log(somaParams(1, 2, 3, 4, 5)) // [1, 2, 3, 4, 5]

function somaParamsReduce(...params) {
  return params.reduce((total, next) => total + next)
}

console.log(somaParamsReduce(1, 2, 3, 4, 5)) // 15

function somaComParams(a, b, ...params) {
  console.log(a, b, params)
}

somaComParams(1, 2, 3, 4, 5) // 1, 2, [3, 4, 5]
