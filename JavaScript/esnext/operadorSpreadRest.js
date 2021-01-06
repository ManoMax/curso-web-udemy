// Operador ... rest (juntar) / spread (espalhar)
// usar rest com parãmetro de função

// usar spread com objeto
const funcionario = { nome: 'Maria', salario: 12348.99 }
const clone = { ativo: true, ...funcionario }
console.log(clone)
clone.nome = 'João'
console.log(funcionario)
console.log(clone)

// Usar spead com array
const grupoA = ['João', 'Pedro', 'Gloria']
const grupoFinal =  ['Maria', ...grupoA, 'Rafaela']
console.log(grupoFinal)