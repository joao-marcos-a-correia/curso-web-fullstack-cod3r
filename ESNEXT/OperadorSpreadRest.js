//Operator ... rest(juntar) spread(separar)
//usar rest com parametro de funcao

//usar spread com objeto
const funcionario = { nome: 'Maria' , salario: 12348.99}
const clone = { ativo: true , ...funcionario }
console.log(clone)

//usar spread com array
const grupoA = ['Joao' , 'Pedro' , 'Gloria']
const grupoB = ['Maria' , 'Rafaela' , ...grupoA]
console.log(grupoB)
























