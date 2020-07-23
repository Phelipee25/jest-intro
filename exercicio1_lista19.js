// 1 (Obrigatório) - Crie uma função que recebe uma parâmetro e, identifica se esse
// parâmetro é uma string, se for uma string deve retornar ‘TRUE’ senão, ‘FALSE’.
// Por fim, crie um teste para validar que sua função está funcionando corretamente.

function parametro(a){
    if (a == 'string'){
        return true
    }
    else {
        return false
    }
}

module.exports = parametro