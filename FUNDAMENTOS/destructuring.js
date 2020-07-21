// novo recurso do ECMA2015
const pessoa = {
    nome: 'ana',
    idade: '5',
    endereço:{
        logradouro:'Rua 9',
        numero: 500
    }
}

const{ nome,idade } = pessoa
console.log(nome,idade)

const{nome: n ,idade: i } = pessoa
console.log(n,i)

const{sobrenome,sucesso = true } = pessoa
console.log(sobrenome,sucesso)

const{endereço:{logradouro,numero,cep}} = pessoa
console.log(logradouro,numero,cep)