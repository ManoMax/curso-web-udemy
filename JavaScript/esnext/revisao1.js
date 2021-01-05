// let e const
{
    var a = 2
    let b = 3
    const c = 4
}

console.log(a)
// console.log(b) // Não é possível acessar
// console.log(c) // Não é possível acessar

// Template String
const produto = 'iPad'
console.log(`${produto} é caro!`)
console.log(`${produto}
 é
caro!`)
console.log(`${produto}
é
caro!`)

// Destructuring
const [l, e, ...tras] = 'Cod3r'
console.log(l, e, tras)

const [x, y] = [1, 2]
console.log(x, y)

const [j, , k] = [1, 2, 3]
console.log(j, k)

const { idade: i, nome } = { nome: 'Ana', idade: 9 }
console.log(i, nome)