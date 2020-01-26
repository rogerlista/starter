function soma(a, b) {
  return a + b
}

console.log(soma(2, 8)) // 10
console.log(soma(2)) // NaN
console.log(soma()) // NaN

function soma2(a = 3, b = 9) {
  return a + b
}

console.log(soma2(2, 8)) // 10
console.log(soma2(2)) // 11
console.log(soma2()) // 12

const soma3 = (a = 2, b = 5) => a + b

console.log(soma3(8, 6)) // 14
console.log(soma3(6)) // 11
console.log(soma3()) // 7
