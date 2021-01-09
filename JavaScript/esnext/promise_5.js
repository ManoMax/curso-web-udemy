function funcionarOuNao(valor, chanceErro) {
    return new Promise((resolve, reject) => {
        if(Math.random() < chanceErro) {
            reject('Ocorreu um erro!')
        } else {
            resolve(valor)
        }
    })
}

funcionarOuNao('Testando', 0.5)
    .then(v => console.log(`Valor: ${v}`))
    .catch(erro => console.log(`Erro: ${erro}`))
    .then(() => console.log('Fim!')) // Será sempre chamado!

// Em ambos os casos, caso ocorra um erro em algum dos then's iniciais, o catch será acionado.
funcionarOuNao('Testando 2', 0.5)
    .then(v => `Valor: ${v}`)
    .then(console.log)
    .catch(erro => console.log(`Erro: ${erro}`))
    
funcionarOuNao('Testando 3', 0.5)
    .then(v => `Valor: ${v}`)
    .then(
        v => console.log(v),
        erro => console.log(`Erro Esp.: ${erro}`) // Erro tratado dentro de um Then específico
    )
    .then(() => console.log('Quase Fim!'))
    .catch(erro => console.log(`Erro: ${erro}`))
    .then(() => console.log('Fim!'))