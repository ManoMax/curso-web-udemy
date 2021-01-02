const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

// Desafio: Encontrar a mulher chinesa com menor salário

// Minha solução:

axios.get(url).then(response => {
    const funcionarios = response.data
    // console.log(funcionarios)

    const mulher = p => p.genero === "F"
    const china = p => p.pais === "China"
    
    let mulheresChinesas = funcionarios.filter(mulher).filter(china)

    let menorSalario = mulheresChinesas[0]
    mulheresChinesas.forEach(pessoa => {
        if (pessoa.salario < menorSalario.salario) {
            menorSalario = pessoa
        }
    })

    console.log(menorSalario)
})

// Solução do curso:

const chineses = p => p.pais === "China"
const mulheres = p => p.genero === "F"
const menorSalario = (func, funcAtual) => {
    return func.salario < funcAtual.salario ? func : funcAtual
}

axios.get(url).then(response => {
    const funcionarios = response.data
    // console.log(funcionarios)

    const func = funcionarios
        .filter(chineses)
        .filter(mulheres)
        .reduce(menorSalario)

    console.log(func)
})