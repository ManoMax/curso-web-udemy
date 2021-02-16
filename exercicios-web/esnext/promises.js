function falarDepoisDe(segundos, frase) {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            // reject(frase) : Para casos de erro!
            resolve(frase) // Só aceita 1 único parâmetro
        }, segundos * 1000)
    })
}

falarDepoisDe(3, 'Que legal!')
    .then(frase => frase.concat('?!?'))
    .then(outraFrase => console.log(outraFrase))
    .catch(e => console.log(e))