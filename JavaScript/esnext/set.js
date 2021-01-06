// Não aceita repetição/não indexada
const times = new Set()
times.add('Vasco')
times.add('São Paulo').add('Palmeiras').add('Corinthians')
times.add('Flamengo')
times.add('Corinthians')

console.log(times)
console.log(times.size)
console.log(times.has('vasco'))
console.log(times.has('Vasco'))
times.delete('Flamengo')
console.log(times.has('Flamengo'))
times.add('Flamengo')
console.log(times)

const nomes = ['Raquel', 'Lucas', 'Júlia', 'Lucas']
const nomeSet = new Set(nomes)
console.log(nomes)