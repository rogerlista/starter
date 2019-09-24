class List {
  constructor() {
    this.data = []
  }

  add(data) {
    this.data.push(data)
    console.log(this.data)
  }
}
class TodoList extends List {
  constructor() {
    super()

    this.usuario = 'Juca'
  }

  mostraUsuario() {
    console.log(this.usuario)
  }

  add(data) {
    super.add(data)
    console.log('lista de todos', this.data)
  }
}

let minhaLista = new TodoList()

document.getElementById('novo-todo').onclick = function() {
  minhaLista.add('Novo todo utilizando herança')
}

minhaLista.mostraUsuario()

class Matematica {
  static soma(a, b) {
    return a + b
  }
}

console.log(Matematica.soma(4, 8))
