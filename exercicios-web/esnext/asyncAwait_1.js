function esperarPor(tempo = 2000) {
    return new Promise(function(resolve) {
        setTimeout(() => resolve(), tempo)
    })
}

async function retornarValorAsincrono() {
    return 20
}

esperarPor(3000)
    .then(() => console.log('Executando promise 1'))
    .then(esperarPor)
    .then(() => console.log('Executando promise 2'))
    .then(esperarPor)
    .then(() => console.log('Executando promise 3'))

async function executar() {
    esperarPor(2000)
    console.log('Executar 1')

    esperarPor(2000)
    console.log('Executar 2')
    
    esperarPor(2000)
    console.log('Executar 3')

    await esperarPor(2000)
    console.log('Executar 4')

    await esperarPor(2000)
    console.log('Executar 5')
    
    await esperarPor(2000)
    console.log('Executar 6')

    console.log(retornarValorAsincrono())
    console.log(await retornarValorAsincrono())

    return 42
}

// const valor42 = await executar() // Não é possível no module node
executar()
    .then(console.log)

// Nesse caso, como esta dentro de uma função async, é possível.
async function executarDeVerdade() {
    const valor42 = await executar()
    console.log(valor42)
}
// executarDeVerdade()