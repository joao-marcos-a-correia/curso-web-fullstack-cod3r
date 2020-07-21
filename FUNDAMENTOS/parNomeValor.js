//par nome/valor
const saudacao = 'Opa' //contexto lexico 1

function exec(){
    const saudacao = 'Fala' //contexo lexico 2
    return saudacao
}

//Objetos sao grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Pedro',
    idade: '22',
    peso: '90',
}
console.log(saudacao)
console.log(exec())
console.log(cliente)