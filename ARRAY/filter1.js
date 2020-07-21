const produtos = [
    {nome: 'Notebook' , preco: 2499 , fragil: true},
    {nome: 'Ipad PRO' , preco: 4199 , fragil: true},
    {nome: 'Copo De Vidro' , preco: 12.99 , fragil: true},
    {nome: 'Copo De Plastico' , preco: 18.99 , fragil: false}
]

console.log(produtos.filter(function(p) {
    return p.preco > 10
}))

const produtosCaros = (p) => p.preco >= 500
const produtosFrageis = (p) => p.fragil == true

console.log(produtos.filter(produtosCaros).filter(produtosFrageis))