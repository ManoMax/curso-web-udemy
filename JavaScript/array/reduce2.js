const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true },
]

// Desafio 1: Todos os alunos são bolsistas?

// Minha resposta:
const todosSaoBolsistas = alunos.map(a => a.bolsista).reduce(function(acumulador, atual) {
    return acumulador && atual
})
console.log(todosSaoBolsistas)

// Resposta do curso:
const todosBolsistas = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas))

// Desafio 2: Algum aluno é bolsista?

// Minha resposta:
const existeBolsistas = alunos.map(a => a.bolsista).reduce(function(acumulador, atual) {
    return acumulador || atual
})
console.log(existeBolsistas)

// Resposta do curso:
const algumBolsista = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista))