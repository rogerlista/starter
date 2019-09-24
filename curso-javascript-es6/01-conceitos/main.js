const a = 3

// a = 6 // constantes não podem receber novos valores - read-only

const usuario = { nome: 'Juca' }

console.log(usuario) // nome: 'Juca'
usuario.nome = 'Teobaldo' // mutar/mutando uma constante
console.log(usuario) // nome: 'Teobaldo'

// escopos

function teste(x) {
  let y = 2
  let z = 4

  if (x > 5) {
    let z = 8 // nova abertura de chaves novo escopo, nova variável z sobrepõem a variável z externa.
    console.log(x, y, z)
  }
}

// console.log(y) // a variável y só pode ser acessada dentro/escopo da função.

teste(10) // 10 2 8
