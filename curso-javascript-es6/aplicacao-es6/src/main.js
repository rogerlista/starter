class App {
  constructor() {
    this.repositories = []
    this.formEl = document.getElementById('repo-form')
    this.ulEl = document.getElementById('repo-list')

    this.registerHandle()
  }

  registerHandle() {
    this.formEl.onsubmit = event => this.addRepository(event)
  }

  addRepository(event) {
    event.preventDefault()

    const repository = {
      name: 'rocketseat.com.br',
      description: 'Tire a sua ideia do papel e dê vida à sua startup.',
      avatar_url: 'https://avatars0.githubusercontent.com/u/28929274?v=4',
      html_url: 'http://github.com/rocketseat/unform'
    }

    this.repositories.push(repository)
    this.render()
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
