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
