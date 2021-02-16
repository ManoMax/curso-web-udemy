const moduloA = require('../../moduloA')
console.log(moduloA.ola)

// Pacote criado por nós mesmos

// const saudacao = require('saudacao')
// console.log(saudacao.ola)

// const c = require('./pastaC/index')
const c = require('./pastaC') // Isso funciona devido ao index.js dentro da pasta '/pastaC'
console.log(c.ola2)

const http = require('http')
http.createServer((req, res) => {
    res.write('Bom dia!')
    res.end()
}).listen(8080)