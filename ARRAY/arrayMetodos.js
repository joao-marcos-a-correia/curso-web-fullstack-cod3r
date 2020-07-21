const pilotos = ['Vettel' , 'Alonso' , 'Raikkonen' , 'Massa']
pilotos.pop() // remove o ultimo elemento do array
console.log(pilotos)

pilotos.push('Verstappen')
console.log(pilotos)

pilotos.shift() // remove o primeiro elemento do array
console.log(pilotos)

pilotos.unshift('Hamilton')
console.log(pilotos)

//splice pode adicionar e remover elementos
// Adicionando
pilotos.splice(2 , 0 , 'Bottas' , 'Massa')
console.log(pilotos)

//Removendo
pilotos.splice(3 , 1)
console.log(pilotos)

const algunsPilotos = pilotos.slice(2) //novo array a partir do indice digitado
console.log(algunsPilotos);

const algunsPilotos2 = pilotos.slice(1 , 4)
console.log(algunsPilotos2)













