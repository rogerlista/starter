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
  }
}

let minhaLista = new TodoList()

document.getElementById('novo-todo').onclick = function() {
  minhaLista.add('Novo todo utilizando herança')
}
