// pessoa -> endereço de memória "123" -> {...}
const pessoa = { nome: 'João' }

pessoa.nome = 'Pedro'

console.log(pessoa);

// pessoa -> endereço de memória "456" -> {...}
// pessoa = { nome: 'Ana' }

Object.freeze(pessoa);

pessoa.nome = 'Gabriel'
pessoa.idade = 22
delete pessoa.nome

console.log(pessoa);

const pessoaConstante = Object.freeze({ nome: 'Maria' })
pessoaConstante.nome = 'José'
console.log(pessoaConstante);