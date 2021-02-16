require('./global')

console.log(global.MinhaApp.saudacao())
console.log(MinhaApp.saudacao())

console.log(MinhaApp.nome)
MinhaApp.nome = 'Eita!'
console.log(MinhaApp.nome)

console.log(MinhaApp2.nome)
MinhaApp2.nome = 'Eita!'
console.log(MinhaApp2.nome)