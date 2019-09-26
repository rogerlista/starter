import ClasseUsuario from './usuario'
import { idade } from './usuario'

import Usuario, { idade as idadeUsuario } from './usuario'

ClasseUsuario.info() // Apenas teste
console.log(idade) // 25

Usuario.info() // Apenas teste
console.log(idadeUsuario) // 25
