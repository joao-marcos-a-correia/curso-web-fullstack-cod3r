const notas = [2 , 4 , 5 , 6 , 7 , 8 , 9]

let numerosPares = notas.filter(
    (x) => {
        return x % 2 == 0
    }
)
console.log(numerosPares)

let numerosImpares = notas.filter(
    (x) => {
        return x % 2 == 1
    }
)
console.log(numerosImpares)