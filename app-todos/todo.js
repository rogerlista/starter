let listElement = document.querySelector('#app ul')
let inputElement = document.querySelector('#app input')
let buttonElement = document.querySelector('#app button')

let todos = [
  'Fazer café',
  'Estudar Javascript',
  'Entrar na comunidade da Rocketseat'
]

function renderTodos() {
  listElement.innerHTML = ''

  for (let todo of todos) {
    let todoElement = document.createElement('li')
    let textElement = document.createTextNode(todo)
    let linkElement = document.createElement('a')
    let textLinkElement = document.createTextNode('Excluir')
    let pos = todos.indexOf(todo)

    linkElement.setAttribute('href', '#')
    linkElement.setAttribute('onclick', `deleteTodo(${pos})`)

    linkElement.appendChild(textLinkElement)
    todoElement.appendChild(textElement)
    todoElement.appendChild(linkElement)
    listElement.appendChild(todoElement)
  }
}

renderTodos()

function addTodo() {
  let todoText = inputElement.value

  todos.push(todoText)
  inputElement.value = ''
  renderTodos()
}

buttonElement.onclick = addTodo

function deleteTodo(pos) {
  todos.splice(pos, 1)
  renderTodos()
}
