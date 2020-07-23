// 2 (Obrigatório) - Crie um programa que receba um e-mail e uma senha do usuário,
// após isso, crie uma função que vai validar o e-mail e a senha, se o e-mail for igual a
// ‘admin@arbyte.com’ e a senha ‘batatafrita’, a função deve retornar ‘TRUE’, senão
// ‘FALSE’.
// Por fim, crie um teste que valide se a função está retornando ‘FALSE’.

class Login{
    constructor(email, senha){
        this.email = email
        this.senha = senha
    }
}

function login(a, b){
    const login = new Login("admin@arbyte.com", "batatafrita")
    if (a == "admin@arbyte.com" && b == "batatafrita"){
        return true
    }else {
        return false
    }
}

module.exports = login