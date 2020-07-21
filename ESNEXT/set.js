// não aceita repetição / não indexada

const times = new Set()
times.add('Vasco')
times.add('Sao Paulo').add('Palmeiras').add('Corinthians')
times.add('Flamengo')
times.add('Vasco')

console.log(times)
console.log(times.size)
console.log(times.has('Vasco'))
console.log(times.delete('Flamengo'))
console.log(times.has('Flamengo'))

const nomes = ['Raquel' , 'Lucas' , 'Joao' , 'Lucas']
const nomesSet = new Set(nomes)
console.log(nomesSet)













