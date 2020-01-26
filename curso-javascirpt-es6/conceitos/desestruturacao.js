const usuario = {
  nome: 'Juca',
  idade: 38,
  endereco: {
    cidade: 'Rio do Sul',
    estado: 'SC'
  }
}

console.log(usuario.nome) // Juca
console.log(usuario.idade) // 38
console.log(usuario.endereco.cidade) // Rio do Sul

const {
  nome,
  idade,
  endereco: { cidade }
} = usuario

console.log(nome) // Juca
console.log(idade) // 38
console.log(cidade) // Rio do Sul

function infoUsuario(usuario) {
  console.log(usuario.nome, usuario.idade) // Juca 38
}

infoUsuario(usuario)

function infoUsuario2({ nome, idade }) {
  console.log(nome, idade) // Juca 38
}

infoUsuario2(usuario)

function infoUsuario3({ nome: meuNome, idade }) {
  console.log(meuNome, idade) // Juca 38
}

infoUsuario3(usuario)
