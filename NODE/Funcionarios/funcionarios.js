const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios1 = require('axios')

const chineses = f => f.pais === 'China'
const mulheres = f => f.genero === 'F'
const menorSalario = (func , funcAtual) => {
    return func.salario < funcAtual.salario ? func : funcAtual
}

axios1.get(url).then(response => {
    const funcionarios = response.data

    const func = funcionarios
    .filter(chineses)
    .filter(mulheres)
    .reduce(menorSalario)

    console.log(func)
})
