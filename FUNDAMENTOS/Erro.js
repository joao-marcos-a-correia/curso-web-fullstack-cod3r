function tratarErro(erro){
    throw new Error('Erro de Processamento')
}

function imprimirNome(obj){
    try { 
    console.log(obj.name.toUpperCase() + '!!!')
    } catch(e){
        tratarErro(e)
    }finally {
        console.log('Show')
    }
}

const obj = { nome : 'Joao' }
imprimirNome(obj)
console.log(joaa)





