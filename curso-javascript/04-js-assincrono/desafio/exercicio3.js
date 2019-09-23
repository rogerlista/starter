let mensagemElement = document.getElementById('mensagem')
let inputElement = document.querySelector('input[name="user"]')
let buttonElement = document.querySelector('button')
let ulElement = document.querySelector('ul')

function setLoading(loading = true) {
  if (loading) {
    let spanElement = document.createElement('span')
    let textElement = document.createTextNode('Carregando...')

    spanElement.setAttribute('id', 'loading')
    spanElement.appendChild(textElement)
    mensagemElement.appendChild(spanElement)

    spanElement.appendChild(textElement)
    mensagemElement.appendChild(spanElement)
  } else {
    let spanElement = document.getElementById('loading')
    spanElement.remove()
  }
}

buttonElement.onclick = function() {
  let user = inputElement.value

  if (user) {
    setLoading()

    fetch(`https://api.github.com/users/${user}/repos`)
      .then(function(response) {
        return response.json()
      })
      .then(function(repositorios) {
        for (let repositorio of repositorios) {
          let liElement = document.createElement('li')
          let textElement = document.createTextNode(repositorio.name)

          liElement.appendChild(textElement)
          ulElement.appendChild(liElement)
        }
      })
      .catch(function(error) {
        let spanElement = document.createElement('span')
        let textElement = document.createTextNode('Usuário não encontrado!')

        spanElement.appendChild(textElement)
        mensagemElement.appendChild(spanElement)

        setTimeout(function() {
          spanElement.remove()
        }, 3000)
      })
      .finally(function() {
        setLoading(false)
      })
  }
}
