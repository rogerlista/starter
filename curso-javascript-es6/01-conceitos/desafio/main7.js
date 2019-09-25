const nome = 'Juca'
const idade = 25

const usuario = {
  nome: nome,
  idade: idade,
  cidade: 'Rio do Sul'
}

console.log(usuario) // { nome: 'Juca', idade: 25, cidade: 'Rio do Sul' }

const usuario1 = {
  nome,
  idade,
  cidade: 'São José dos Campos'
}

console.log(usuario1) // { nome: 'Juca', idade: 25, cidade: 'São José dos Campos' }
