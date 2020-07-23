const novoPar = require ('./exercicio1_lista19')

test('deve retornar falso se não for string', ()=>{
    expect(novoPar(24)).toBeFalsy()
})