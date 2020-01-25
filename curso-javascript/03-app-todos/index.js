const listElement = document.querySelector("ul");
const inputElement = document.querySelector("input");
const buttonElement = document.querySelector("button");

const todos = [
  "Fazer café",
  "Estudar Javascript",
  "Entrar na comunidade da Rocketseat"
];

function renderTodos() {
  listElement.innerHTML = "";
  for (todo of todos) {
    const todoElement = document.createElement("li");
    const textElement = document.createTextNode(todo);

    todoElement.appendChild(textElement);
    listElement.appendChild(todoElement);
  }
}

renderTodos();

function addTodo() {
  const todoText = inputElement.value;

  todos.push(todoText);
  inputElement.value = "";
  inputElement.focus();

  renderTodos();
}

buttonElement.onclick = addTodo;
