const usuario = {
  nome: 'Juca',
  idade: 23,
  endereco: {
    cidade: 'Rio de Janeiro',
    estado: 'RJ'
  }
}

console.log(usuario) // {nome: 'Juca', idade: 23, endereco: {cidade: 'Rio de Janeiro, estado: 'RJ'}}

const nomeUsuario = usuario.nome
const idadeUsuario = usuario.idade
const cidadeUsuario = usuario.endereco.cidade
const estadoUsuario = usuario.endereco.estado

console.log(
  nomeUsuario,
  'idade',
  idadeUsuario,
  'cidade',
  cidadeUsuario,
  'estado',
  estadoUsuario
) // Juca idade 23 cidade Rio de Janeiro estado RJ

const {
  nome,
  idade,
  endereco: { cidade, estado }
} = usuario

console.log(nome, 'idade', idade, 'cidade', cidade, 'estado', estado) // Juca idade 23 cidade Rio de Janeiro estado RJ

function mostraNome({ nome }) {
  console.log(nome)
}

function mostraEndereco({ endereco: { cidade, estado } }) {
  console.log('Cidade', cidade, '-', estado)
}

mostraNome(usuario) // Juca
mostraEndereco(usuario) // Cidade Rio de Janeiro - RJ
