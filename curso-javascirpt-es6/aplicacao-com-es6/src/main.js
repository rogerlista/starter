class App {
  constructor() {
    this.repositories = []

    this.formElement = document.querySelector('#repo-form')
    this.listElement = document.querySelector('#repo-list')

    this.registerHandle()
  }

  registerHandle() {
    this.formElement.onsubmit = event => this.addRepository(event)
  }

  addRepository(event) {
    event.preventDefault()

    this.repositories.push({
      name: 'rocketseat.com.br',
      description: 'Tire a sua ideia do papel e dê vida à sua startup.',
      avatar_url: 'https://avatars0.githubusercontent.com/u/28929274?s=200&v=4',
      html_url: 'http://rocketseat.com.br'
    })

    this.render()
  }

  render() {
    this.listElement.innerHTML = ''

    this.repositories.forEach(repo => {
      let imgEl = document.createElement('img')
      imgEl.setAttribute('src', repo.avatar_url)
      imgEl.setAttribute('alt', 'Logo')

      let titleEl = document.createElement('strong')
      titleEl.appendChild(document.createTextNode(repo.name))

      let descriptionEl = document.createElement('p')
      descriptionEl.appendChild(document.createTextNode(repo.description))

      let linkEl = document.createElement('a')
      linkEl.setAttribute('target', '_blank')
      linkEl.appendChild(document.createTextNode('Acessar'))

      let listItemEl = document.createElement('li')
      listItemEl.appendChild(imgEl)
      listItemEl.appendChild(titleEl)
      listItemEl.appendChild(descriptionEl)
      listItemEl.appendChild(linkEl)

      this.listElement.appendChild(listItemEl)
    })
  }
}

new App()
