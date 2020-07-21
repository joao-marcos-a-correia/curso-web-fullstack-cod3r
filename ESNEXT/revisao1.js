//let e const
{
    var a = 1
    let b = 2
    console.log(b) //let funciona com escopo de bloco // var funciona com 2 escopos(global e local)
}
console.log(a)

//Template String
const produto = 'iPad'
console.log(`${produto} é caro`)

//Destructuring
const [l , e , ...tras] = "Cod3r"
console.log(l , e , tras)

const [x  , , y] = [1 , 2 , 3]
console.log(x , y)

const {idade: i , nome} = {nome: 'Joao' , idade: 23}
console.log(i , nome)


