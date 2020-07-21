//javascript permite chamar exibiçao antes da função de ser declarada
console.log(Soma(3 , 2))
//function declaration
function Soma(x , y) {
    return x + y
}

//function Expression
const sub = function(x , y) {
    return x - y
} 

//named function expression
const mult = function mult(x , y) {
    return x * y
}