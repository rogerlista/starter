const delay = () => new Promise(resolve => setTimeout(resolve, 1000))

async function umPorSegundo() {
  await delay()
  console.log('1s')

  await delay()
  console.log('2s')

  await delay()
  console.log('3s')
}

umPorSegundo()

import axios from 'axios'

async function getUserFromGithub(user) {
  try {
    const response = await axios.get(`https://api.github.com/users/${user}`)

    console.log(response.data)
  } catch (erro) {
    console.warn('Usuário não existe')
  }
}

getUserFromGithub('rogerlista')
getUserFromGithub('rogerlista3434')

class Github {
  static async getRepositories(repo) {
    try {
      const response = await axios.get(`https://api.github.com/repos/${repo}`)

      console.log(response.data)
    } catch (erro) {
      console.warn('Repositório não existe')
    }
  }
}

Github.getRepositories('rogerlista/eventex')
Github.getRepositories('rogerlista/djksadldkfj')

const buscaUsuario = async usuario => {
  try {
    const response = await axios.get(`https://api.github.com/users/${usuario}`)

    console.log(response.data)
  } catch (erro) {
    console.warn('Usuário não encontrado...')
  }
}

buscaUsuario('diego3g')
buscaUsuario('djfkdjfdkfl')
