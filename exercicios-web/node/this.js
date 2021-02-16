console.log(this === global)
console.log(this === module)

console.log(this === module.exports)
console.log(this === exports) // exports aponta para a mesma referência de module.exports

function logThis() {
    console.log('Dentro de uma função:')
    console.log(this === exports)
    console.log(this === module.exports)
    console.log(this === global)
    
    // Cuidado com isso:
    // this.perigo = '...'
}

logThis()