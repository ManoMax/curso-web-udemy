let a = 1
console.log(a)

// resolve = resolver (cumprir a promessa)
let p = new Promise(function(resolve) {
    resolve({
        x: 3,
        y: 4,
        lista: ['Ana', 'Bia', 'Carlos', 'Daniel']
    })
})

p
    .then(valor => {
        console.log(valor)
        return valor.lista
    })
    .then(valor => {
        console.log(valor)
        return valor[0]
    })
    .then(valor => {
        console.log(valor)
        return valor[0]
    })
    .then(console.log)