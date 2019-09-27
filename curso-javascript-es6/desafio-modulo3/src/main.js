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
