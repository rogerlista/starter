function checaIdade(idade) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      if (idade >= 18) {
        resolve()
      } else {
        reject()
      }
    }, 2000)
  })
}

checaIdade(17)
  .then(function() {
    console.log('Maior que 18')
  })
  .catch(function() {
    console.warn('Menor que 18')
  })

function checaIdade1(idade) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      if (idade >= 18) {
        resolve('Maior de 18 anos.')
      } else {
        reject('Menor de 18 anos.')
      }
    }, 2000)
  })
}

checaIdade1(17)
  .then(function(resposta) {
    console.log(resposta)
  })
  .catch(function(error) {
    console.warn(error)
  })
