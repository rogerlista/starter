const minhaPromise = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('OK')
    }, 2000)
  })

minhaPromise()
  .then(response => console.log('00 - Utilizando then', response))
  .catch(erro => console.log('00 - Utilizando then', erro))

async function executaPromise() {
  const response = await minhaPromise()
  console.log('00 - Utilizando async/await', response)
}

executaPromise()

minhaPromise().then(response => {
  console.log('01 - Utilizando then', response)

  minhaPromise().then(response => {
    console.log('01 - Utilizando then', response)

    minhaPromise().then(response => {
      console.log('01 - Utilizando then', response)
    })
  })
})

async function executaPromise2() {
  console.log('01 - Utilizando async/await', await minhaPromise())
  console.log('01 - Utilizando async/await', await minhaPromise())
  console.log('01 - Utilizando async/await', await minhaPromise())
}

executaPromise2()

const executaPromise3 = async () => {
  console.log('02 - Utilizando async/await', await minhaPromise())
  console.log('02 - Utilizando async/await', await minhaPromise())
  console.log('02 - Utilizando async/await', await minhaPromise())
}

executaPromise3()
