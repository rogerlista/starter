class App {
  constructor() {
    this.repositories = []

    this.formElement = document.querySelector('#repo-form')

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

    console.log(this.repositories)
  }
}

new App()
