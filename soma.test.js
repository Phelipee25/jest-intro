const {soma, multi} = require("./math")
const exercicio4 = require ("./exercicio4")

test('a soma de 1 e 2 e 3 deve ser 6', ()=> {
    expect(soma(1,2,3)).toBe(6)
})

test('multiplicação de 2 e 2 deve ser 4', ()=>{
    expect(multi(2,2)).toBe(4)
})

test('a soma de 1 e 2 vezes 3 deve ser 9', () =>{
    expect(exercicio4(1,2,3)).toBe(9)
})