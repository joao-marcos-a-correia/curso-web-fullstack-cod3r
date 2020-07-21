const aprovados = ['Agatha' , 'Aldo' , 'Daniel' , 'Raquel']

aprovados.forEach(function(nome , indice) {
    console.log(`${indice + 1}) ${nome}`)
})

aprovados.forEach((nome) => {
    console.log(nome)
})

const exibirAprovados = (nome , indice) => {console.log(indice + '-' + nome)}

aprovados.forEach(exibirAprovados)