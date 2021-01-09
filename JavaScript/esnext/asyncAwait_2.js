function gerarNumerosEntre(min, max, numerosProibidos) {
    if (min > max) [max, min] = [min, max]
    return new Promise((resolve, reject) => {
        const fator = max - min + 1
        const aleatorio = parseInt(Math.random() * fator) + min
        if (numerosProibidos.includes(aleatorio)) {
            reject('Número repetido!')
        } else{
            resolve(aleatorio)
        }
    })
}

gerarNumerosEntre(1, 5, [1, 2, 4])
    .then(console.log)
    .catch(console.log)

async function gerarMegaSena(qtdeNumeros, tentativas = 1) {
    try {
        const numeros = []
        for (let _ of Array(qtdeNumeros).fill()) {
            numeros.push(await gerarNumerosEntre(1, 60, numeros))
        }
        return numeros
    } catch(e) {
        if (tentativas > 10) {
            throw "Que chato!!!"
        } else {
            return gerarMegaSena(qtdeNumeros, tentativas + 1)
        }
    }
}

gerarMegaSena(18)
    .then(console.log)
    .catch(console.log)