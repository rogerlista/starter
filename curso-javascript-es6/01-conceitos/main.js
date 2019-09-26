import { soma, sub } from './funcoes' // usando export somente só se pode importar entre chaves e com o mesmo nome exportado.
import { soma as somaFunction2, sub as subFunction } from './funcoes' // usando export e dando outro nome as importações
import multi, { divide } from './funcoes' // importando de uma arquivo que contem export default e export somente.

import * as funcoes from './funcoes' // importando todas as funcões para o objeto funcoes.

import soma2 from './soma' // usando export default.
import somaFunction from './soma' // usando export default pode-se dar qualquer nome a importação.

console.log(soma(2, 6)) // 8
console.log(sub(5, 2)) // 3

console.log(somaFunction2(4, 5)) // 9
console.log(subFunction(8, 7)) // 1

console.log(soma2(10, 2)) // 12
console.log(somaFunction(1, 3)) // 4

console.log(multi(2, 3)) // 6
console.log(divide(5, 2)) // 2.5

console.log(funcoes.soma(10, 10)) // 20
console.log(funcoes.sub(20, 5)) // 15
console.log(funcoes.divide(10, 5)) // 2
// console.log(funcoes.multi(10, 3)) // multi não pode ser exportada dessa maneira somente como default.
console.log(funcoes.default(10, 3)) // 30 - multi só pode ser chamada como default.
