// Arrow Function
const soma = (a, b) => a + b
console.log(soma(2, 3))

// Arrow Functions (this)
const lexico1 = () => console.log(this === exports)
const lexico2 = lexico1.bind({}) // Forçando apontar para outro objeto
lexico1()
lexico2()

// Parametros default
function log(texto = 'Node') {
    console.log(texto)
}

log('ManoMax')
log(null)
log('')
log(undefined)
log()
log(' ')

// Operador rest
function total(...numeros) {
    let total = 0
    numeros.forEach(n => total += n)
    return total
}

console.log(total(2, 3, 4, 5))