const fabricantes = ["Mercedes" , "Audi" , "Bmw"]

function imprimir (nome , indice) {
    console.log(`${indice + 1}. ${nome} `)
}

fabricantes.forEach(imprimir)
fabricantes.forEach(function(fabricante , indice) {
    console.log(indice , fabricante)
}) 