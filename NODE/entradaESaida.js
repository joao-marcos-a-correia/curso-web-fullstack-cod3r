const anonimo = process.argv.indexOf('-a') !== -1
//console.log(anonimo)

if(anonimo) {
    process.stdout.write('Ola Anonimo \n')
    process.exit()
} else {
    process.stdout.write('Informe Seu Nome:')
    process.stdin.on('data', data => {
        const nome = data.toString().replace('\n' , '')

        process.stdout.write(` Falaaaa ${nome}\n`)
        process.exit()
    })
}