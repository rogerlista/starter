function soma(a, b) {
  return a + b
}

console.log(soma(1)) // NaN
console.log(soma()) // NaN

function somaComValoresPadrao(a = 3, b = 6) {
  return a + b
}

console.log(somaComValoresPadrao(1)) // 7
console.log(somaComValoresPadrao()) // 9

const somaArrowFunction = (a = 3, b = 6) => a + b

console.log(somaArrowFunction(1)) // 7
console.log(somaArrowFunction()) // 9
