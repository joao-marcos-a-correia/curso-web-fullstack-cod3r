//Funcão sem Retorno

function imprimirSoma(a, b)
{
    console.log(a + b)
}

imprimirSoma(2,3)

//Função com Retorno
function soma(a, b = 0) // atribuindo valor padrao em B
{
    return a + b
}
console.log(soma(2))
