class TodoList {
  constructor() {
    this.todos = []
  }

  addTodo() {
    this.todos.push('Novo todo')
    console.log(this.todos)
  }
}

let minhaLista = new TodoList()

document.getElementById('novo-todo').onclick = function() {
  minhaLista.addTodo()
}
