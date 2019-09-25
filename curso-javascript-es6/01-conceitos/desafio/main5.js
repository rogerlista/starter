// rest

const arr = [1, 2, 3, 4, 5, 6]
const [x, ...y] = arr

console.log(x) // 1
console.log(y) // [2, 3, 4, 5, 6]

function soma(...params) {
  return params.reduce((total, item) => total + item)
}

console.log(soma(1, 2, 3, 4, 5, 6)) // 21
console.log(soma(1, 2)) // 3

// spread

const usuario = {
  nome: 'Juca',
  idade: 25,
  endereco: {
    cidade: 'Rio do Sul',
    uf: 'SC',
    pais: 'Brasil'
  }
}
console.log(usuario) // { nome: 'Juca', idade: 25, endereco: { cidade: 'Rio do Sul', uf: 'SC', pais: 'Brasil' } }

const usuario1 = { ...usuario, nome: 'Tabajara' }
console.log(usuario1) // { nome: 'Tabajara', idade: 25, endereco: { cidade: 'Rio do Sul', uf: 'SC', pais: 'Brasil' } }

const usuario2 = {
  ...usuario,
  endereco: { ...usuario.endereco, cidade: 'Lontras' }
}
console.log(usuario2) // { nome: 'Juca', idade: 25, endereco: { cidade: 'Lontras', uf: 'SC', pais: 'Brasil' } }
