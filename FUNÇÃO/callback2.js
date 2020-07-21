const notas = [7.7 , 8.8 , 5.6 , 7.9 , 3.4 , 2.5 , 6.7]

//Sem callback 

const notasbaixas1 = []
for(let i in notas) {
    if(notas[i] < 7) {
        notasbaixas1.push(notas[i])
    }
}

console.log(notasbaixas1)


//Usando callback
const notasbaixas2 = notas.filter(function(nota) {
    return nota < 7
})

console.log(notasbaixas2)

const notasbaixas3  = notas.filter (nota => nota < 7)
console.log(notasbaixas3)










