class Usuario {
  constructor(email, senha) {
    this.email = email
    this.senha = senha
  }

  isAdmin() {
    return this.admin || false
  }
}

class Admin extends Usuario {
  constructor(email, senha) {
    super(email, senha)
    this.admin = true
  }
}

const user = new Usuario('juca@email.com', 'senha123')
const admin = new Admin('teobaldo@email.com', 'senha321')

console.log(user.isAdmin()) // false
console.log(admin.isAdmin()) // true
