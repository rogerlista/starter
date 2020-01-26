class List {
  constructor() {
    this.data = []
  }

  add(data) {
    this.data.push(data)
    console.log(this.data)
  }
}

class Todo extends List {
  constructor() {
    super()

    this.usuario = 'Juca'
  }

  mostrarUsuario() {
    console.log(this.usuario)
  }
}

class Matematica {
  static soma(a, b) {
    return a + b
  }
}

console.log(Matematica.soma(4, 9))

const todo = new Todo()

document.querySelector('button').onclick = function() {
  todo.add('Tomar café')
}

todo.mostrarUsuario()

/*
  Testando o webpack
*/

import { somando, subtraindo } from './funcoes'
import somatoria from './calculadora' // default
import adiciona from './calculadora' // default
import somatoria2, { subtracao, multiplicando } from './calculadora'
import { subtracao as tira } from './calculadora' // renomeando
import * as func from './calculadora' // importando tudo

console.log(somando(1, 3)) // 4
console.log(subtraindo(4, 2)) // 2

console.log(somatoria(8, 3)) // 11
console.log(adiciona(3, 3)) // 6

console.log(somatoria2(1, 2)) // 3
console.log(subtracao(3, 2)) // 1
console.log(multiplicando(2, 5)) // 10

console.log(tira(5, 2)) // 3

// console.log(func.somatoria(22, 2)) // default não pode ser importada
console.log(func.subtracao(10, 2)) // 8
console.log(func.multiplicando(3, 3)) // 9
console.log(func.divide(100, 5)) // 20
