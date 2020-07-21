const valores = [1.2,3.4,5.6,7.8]

console.log(valores[1],valores[4])

valores[4] = 10
console.log(valores)
console.log(valores.length)

console.log(valores.pop())
delete valores[0]
console.log(valores)

console.log(typeof valores)