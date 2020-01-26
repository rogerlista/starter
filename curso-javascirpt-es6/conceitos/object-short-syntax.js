const nome = 'Jucalina'
const idade = 28

const usuario = {
  nome: nome,
  idade: idade,
  empresa: 'Rocketseat'
}

console.log(usuario) // {nome: "Jucalina", idade: 28, empresa: "Rocketseat"}

const usuario2 = {
  nome,
  idade,
  companhia: 'Rocketseat'
}

console.log(usuario2) // {nome: "Jucalina", idade: 28, companhia: "Rocketseat"}
