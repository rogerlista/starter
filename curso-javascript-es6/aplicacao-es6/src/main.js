import api from './api'

class App {
  constructor() {
    this.repositories = []
    this.formEl = document.getElementById('repo-form')
    this.inputEl = document.querySelector('input[name="repository"]')
    this.ulEl = document.getElementById('repo-list')

    this.registerHandle()
  }

  registerHandle() {
    this.formEl.onsubmit = event => this.addRepository(event)
  }

  setLoading(loading = true) {
    if (loading) {
      const divEl = document.createElement('div')
      divEl.setAttribute('id', 'loading')
      divEl.appendChild(document.createTextNode('Carregando...'))

      this.formEl.appendChild(divEl)
    } else {
      document.getElementById('loading').remove()
    }
  }

  async addRepository(event) {
    event.preventDefault()

    const repoInput = this.inputEl.value

    if (repoInput.length === 0) {
      return
    }

    this.setLoading()

    try {
      const response = await api.get(`/repos/${repoInput}`)

      const {
        name,
        description,
        html_url,
        owner: { avatar_url }
      } = response.data

      const repository = {
        name,
        description,
        avatar_url,
        html_url
      }

      this.repositories.push(repository)
      this.inputEl.value = ''
      this.render()
    } catch (err) {
      alert('Repositório não foi encontrado.')
    }

    this.setLoading(false)
  }

  render() {
    this.ulEl.innerHTML = ''

    this.repositories.forEach(repository => {
      const imgEl = document.createElement('img')
      imgEl.setAttribute('src', repository.avatar_url)

      const strongEl = document.createElement('strong')
      strongEl.appendChild(document.createTextNode(repository.name))

      const pEl = document.createElement('p')
      pEl.appendChild(document.createTextNode(repository.description))

      const aEl = document.createElement('a')
      aEl.setAttribute('target', '_blank')
      aEl.setAttribute('href', repository.html_url)
      aEl.appendChild(document.createTextNode('Acessar'))

      const divEl = document.createElement('div')
      divEl.appendChild(strongEl)
      divEl.appendChild(pEl)
      divEl.appendChild(aEl)

      const liEl = document.createElement('li')
      liEl.appendChild(imgEl)
      liEl.appendChild(divEl)

      this.ulEl.appendChild(liEl)
    })
  }
}

new App()
