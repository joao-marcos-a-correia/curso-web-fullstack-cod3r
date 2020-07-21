//pessoa -> 123
const pessoa  = {
    nome: 'Joao'
}
pessoa.nome = 'Pedro'
console.log(pessoa)
//Ao tentar atribuir um novo objeto o endereço de memoria de pessoa é alterado
//pessoa = {nome : 'Ana'}

Object.freeze(pessoa)

pessoa.nome = 'Maria'
pessoa.end = 'Rua ABC'
delete pessoa.nome
console.log(pessoa.nome)
console.log(pessoa)

const pessoaConstante = Object.freeze({nome: 'joao'})
console.log(pessoaConstante)