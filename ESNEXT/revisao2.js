//Arrox Function
const soma = (a , b) => a + b
console.log(soma(2 , 3))

//Arrow Function (this)
const lexico = () => console.log(this === exports)
const lexico2 = lexico.bind({})
lexico()
lexico2()

//parametros default
function log(texto = 'Node') {
    console.log(texto)
}
log()
log('Mais forte que o default')

//Operador Rest/Spread
function total(...numeros) {
    let total = 0
    numeros.forEach(n => total += n)
    return total
}

console.log(total(1 , 2 , 4))







