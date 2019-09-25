const usuarios = [
  { nome: 'Juca', idade: 23, empresa: 'Rocketseat' },
  { nome: 'Teobaldo', idade: 15, empresa: 'Rocketseat' },
  { nome: 'Tabajara', idade: 30, empresa: 'Facebook' }
]

const idades = usuarios.map(usuario => usuario.idade)
console.log(idades) // [23, 15, 30]

const rocketseatMaiorDeIdade = usuarios.filter(
  usuario => usuario.empresa === 'Rocketseat' && usuario.idade > 18
)
console.log(rocketseatMaiorDeIdade) // [{ nome: 'Juca', idade: 23, empresa: 'Rocketseat' }]

const usuarioGoogle = usuarios.find(usuario => usuario.empresa === 'Google')
console.log(usuarioGoogle) // undefined

const usuarioRocketseat = usuarios.find(
  usuario => usuario.empresa === 'Rocketseat'
)
console.log(usuarioRocketseat) // { nome: 'Juca', idade: 23, empresa: 'Rocketseat }

const usuariosAte50Anos = usuarios
  .map(usuario => ({ ...usuario, idade: usuario.idade * 2 }))
  .filter(usuario => usuario.idade <= 50)
console.log(usuariosAte50Anos) // [{ nome: 'Juca', idade: 46, empresa: 'Rocketseat }, { nome: 'Teobaldo', idade: 30, empresa: 'Rocketseat }]
