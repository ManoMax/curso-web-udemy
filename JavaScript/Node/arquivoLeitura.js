const fs = require('fs') // File System

// __dirname = Repositório atual
const caminho = __dirname + '/arquivo.json'

// sincrono:
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

// assincrono:
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    // É interessante criar um teste para verificação de erro 'err'
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`)
})

// sincrono:
const config = require('./arquivo.json')
console.log(config.db)

fs.readdir(__dirname, (err, arquivos) => {
    console.log('Conteudo da pasta:')
    console.log(arquivos)
})