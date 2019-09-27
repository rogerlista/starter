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

async function getUserFromGithubWait(user) {
  try {
    const response = await axios.get(`https://api.github.com/users/${user}`)
    console.log(response.data)
  } catch (err) {
    console.log('Usuário não localizado.')
  }
}

getUserFromGithubWait('rogerlista')
getUserFromGithubWait('rogerlistadkjfkdlsfj')
