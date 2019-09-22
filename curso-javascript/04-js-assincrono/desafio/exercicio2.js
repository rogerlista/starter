let xhr = new XMLHttpRequest()
let inputElement = document.querySelector('input[name="user"]')
let buttonAjaxElement = document.querySelector('#ajax')
let buttonFetchElement = document.querySelector('#fetch')
let buttonAxiosElement = document.querySelector('#axios')
let ulElement = document.querySelector('#repositorios')
let urlBase = 'https://api.github.com/users/'

function render(repositorios) {
  for (let repositorio of repositorios) {
    let liElement = document.createElement('li')
    let textElement = document.createTextNode(repositorio.name)

    liElement.appendChild(textElement)
    ulElement.appendChild(liElement)
  }
}

buttonAjaxElement.onclick = function() {
  let user = inputElement.value

  xhr.open('GET', `${urlBase}${user}/repos`)
  xhr.send(null)

  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        let repositorios = JSON.parse(xhr.responseText)
        render(repositorios)
      }
    }
  }
}

buttonFetchElement.onclick = function() {
  let user = inputElement.value

  fetch(`${urlBase}${user}/repos`)
    .then(function(response) {
      return response.json()
    })
    .then(function(repositorios) {
      render(repositorios)
    })
}

buttonAxiosElement.onclick = function() {
  let user = inputElement.value

  axios.get(`${urlBase}${user}/repos`).then(function(response) {
    render(response.data)
  })
}
