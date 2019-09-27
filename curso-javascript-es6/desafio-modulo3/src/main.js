// função delay aciona o .then após 1s
const delay = () => new Promise(resolve => setTimeout(resolve, 1000))

function umPorSegundo() {
  delay().then(() => {
    console.log('1s')

    delay().then(() => {
      console.log('2s')

      delay().then(() => {
        console.log('3s')
      })
    })
  })
}

umPorSegundo()

async function umPorSegundoAwait() {
  await delay()
  console.log('await 1s')

  await delay()
  console.log('await 2s')

  await delay()
  console.log('await 3s')
}

umPorSegundoAwait()

import axios from 'axios'

function getUserFromGithub(user) {
  axios
    .get(`https://api.github.com/users/${user}`)
    .then(response => {
      console.log(response.data)
    })
    .catch(err => {
      console.log('Usuário não existe.')
    })
}

getUserFromGithub('rogerlista')
getUserFromGithub('rogerlistadkfjdsklfjdkls')

async function getUserFromGithubAwait(user) {
  try {
    const response = await axios.get(`https://api.github.com/users/${user}`)
    console.log(response.data)
  } catch (err) {
    console.log('Usuário não localizado.')
  }
}

getUserFromGithubAwait('rogerlista')
getUserFromGithubAwait('rogerlistadkjfkdlsfj')

class Github {
  static getRepositories(repo) {
    axios
      .get(`https://api.github.com/repos/${repo}`)
      .then(response => {
        console.log(response.data)
      })
      .catch(err => {
        console.log('Repositório não existe.')
      })
  }
}

Github.getRepositories('rogerlista/eventex')
Github.getRepositories('rogerlista/kalfjadfd;l')

class GithubAwait {
  static async getRepositories(repo) {
    try {
      const response = await axios.get(`https://api.github.com/repos/${repo}`)
      console.log(response.data)
    } catch (err) {
      console.log('Repositório não localizado.')
    }
  }
}

GithubAwait.getRepositories('rogerlista/starter')
GithubAwait.getRepositories('rogerlista/starterdfkjsakl')
