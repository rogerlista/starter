const arr1 = [1, 2, 3]
const arr2 = [4, 5, 6]

const arr3 = [...arr1, ...arr2]

console.log(arr3) // [1, 2, 3, 4, 5, 6]

const usuario = {
  nome: 'Juca',
  idade: 25,
  empresa: 'Rocketseat'
}

const usuario2 = { ...usuario, nome: 'Tabajara' }

console.log(usuario2) // { nome: 'Tabajara', idade: 25, empresa: 'Rocketseat'}
