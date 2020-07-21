// ES8 Object.values/ Object.entries

const obj = {a: 1 ,b: 2 , c: 3}
console.log(Object.values(obj))
console.log(Object.entries(obj))

//Melhorias na notacao literal
const nome = 'Carla'
const pessoa = {
    nome,
    ola() {
        return 'Ola Gente'
    }
}
console.log(pessoa.nome , pessoa.ola())

//Class
class Animal{}
class Cachorro extends Animal {
    falar() {
        return 'Cachorro'
    }
}
console.log(new Cachorro().falar())









