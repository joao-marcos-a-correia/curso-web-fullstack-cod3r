const numeros = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8]

const numerosPares = numeros.filter(
    (x) => {
        return x % 2 == 0
    }
)

console.log(numerosPares)

let numerosImpares = numeros.filter(
    (x) => {
        return x % 2 != 0
    }
)
console.log(numerosImpares)

let teste = numeros.reduce(
    (x) => {
        return x % 2 == 0
    }
)

console.log(teste)