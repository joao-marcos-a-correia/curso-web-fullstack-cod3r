//Armazenando uma função em uma variavel

const imprimeSoma = function(a,b)
{
    console.log(a + b)
}
imprimeSoma(2,3)

//Armazenando uma função arrow em uma variavel

const soma = (a,b) =>
{
    return a + b
}
console.log(soma(2,3))

//Retorno Implicito
const subtracao = (a,b) => a - b
console.log(subtracao(3,2))
