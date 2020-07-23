const novoLogin = require('./exercicio2_lista19')

test("o login deve retornar false", ()=>{
    expect(novoLogin('ph@arbyte.com', 'torresmo')).toBeFalsy()
})