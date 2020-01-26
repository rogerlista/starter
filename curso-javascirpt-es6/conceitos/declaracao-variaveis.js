const naoMuda = 'Juca'

// naoMuda = 'Teobaldo' // Erro: assignment to constant variable

console.log(naoMuda) // Juca

let muda = 'Joaquim'

muda = 'Siqueira'

console.log(muda) // Siqueira

function teste(x) {
  const y = 2
  if (x > 5) {
    const y = 8

    console.log('dentro do if', x, y)
  }

  console.log('fora do if', x, y)
}

// console.log('fora da função', y)  // Erro: y is not defined

teste(10) // dentro do if 10 8
// fora do if 10 2
