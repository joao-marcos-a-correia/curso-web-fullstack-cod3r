
String.prototype.reverse  = function() {
    return this.split('').reverse().join('')
}
console.log('Joao Marcos de Almeida Correia'.reverse())

let reverser =  String.prototype.reverse  = param => {
    return param.split('').reverse().join('')
}
console.log(reverser('Joao Marcos de Almeida Correia'))