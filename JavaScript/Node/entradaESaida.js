// Pegar parâmetros a partir da chamada pelo Terminal

// node entradaESaida.js -a : Retorna true
// node entradaESaida.js -b (qualquer coisa diferente de -a) : Retorna false

const anonimo = process.argv.indexOf('-a') !== -1
// console.log(anonimo)

if (anonimo) {
    process.stdout.write('Fala Anônimo!\n')
    process.exit()
} else {
    process.stdout.write('Informe o seu nome: ')
    process.stdin.on('data', data => {
        const nome = data.toString().replace('\n', '')

        process.stdout.write(`Fala ${nome}\n`)
        process.exit()
    }) 
}