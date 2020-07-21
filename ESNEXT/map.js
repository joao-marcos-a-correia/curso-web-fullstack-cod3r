const tecnologia = new Map()
tecnologia.set('React', {framework : false})
tecnologia.set('Angular', {framework : true})

console.log(tecnologia.react)
console.log(tecnologia.get('React').framework)

const chavesVariadas = new Map([
    [function() {} , 'Funcao'],
    [{} , 'Objeto'],
    [123 , 'Numero']
])

chavesVariadas.forEach((valor , chave) => {
    console.log(chave , valor)
})

console.log(chavesVariadas.has(123))
chavesVariadas.delete(123)
console.log(chavesVariadas.has(123));
console.log(chavesVariadas.size)

chavesVariadas.set(123, 'a')
chavesVariadas.set(123, 'b') // nao sao permitidas chaves duplicadas
console.log(chavesVariadas);