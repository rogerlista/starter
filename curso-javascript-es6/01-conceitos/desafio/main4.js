const empresa = {
  nome: 'Rocketseat',
  endereco: {
    cidade: 'Rio do Sul',
    estado: 'SC'
  }
}

const {
  nome,
  endereco: { cidade, estado }
} = empresa

console.log(nome) // Rocketseat
console.log(cidade) // Rio do Sul
console.log(estado) // SC

function mostraInfo(usuario) {
  return `${usuario.nome} tem ${usuario.idade} anos.`
}

console.log(mostraInfo({ nome: 'Juca', idade: 23 })) // Juca tem 23 anos.

function mostraInfoDesestruturacao({ nome, idade }) {
  return `${nome}, tem ${idade} anos.`
}

console.log(mostraInfoDesestruturacao({ nome: 'Teobaldo', idade: 18 })) // Teobaldo tem 18 anos.
