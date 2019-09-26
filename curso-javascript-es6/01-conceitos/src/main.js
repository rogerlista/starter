function minhaPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('OK')
    }, 2000)
  })
}

minhaPromise()
  .then(response => console.log(response)) // OK
  .catch(err => console.log(err))

async function executaPromise() {
  const response = await minhaPromise()
  console.log(response)
}

executaPromise() // OK

async function executaPromise1() {
  console.log('Async', await minhaPromise())
  console.log('Async', await minhaPromise())
  console.log('Async', await minhaPromise())
  console.log('Async', await minhaPromise())
  console.log('Async', await minhaPromise())
}

executaPromise1() // a cada 2 segundos será executada cada uma das linhas da função exibindo OK.

// o mesmo exemplo que o de cima mas utilizando then
minhaPromise().then(res => {
  console.log('then', res)

  minhaPromise().then(res => {
    console.log('then', res)

    minhaPromise().then(res => {
      console.log('then', res)

      minhaPromise().then(res => {
        console.log('then', res)

        minhaPromise().then(res => {
          console.log('then', res)
        })
      })
    })
  })
})

const executaPromiseArrow = async () => {
  console.log('Arrow', await minhaPromise())
  console.log('Arrow', await minhaPromise())
  console.log('Arrow', await minhaPromise())
  console.log('Arrow', await minhaPromise())
  console.log('Arrow', await minhaPromise())
}

executaPromiseArrow()
