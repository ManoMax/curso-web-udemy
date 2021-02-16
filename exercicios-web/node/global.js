// console.log(global)
global.MinhaApp = {
    saudacao() {
        return 'Estou em todos os lugares!'
    },
    nome: 'Sistema Legal'
}

global.MinhaApp2 = Object.freeze({
    saudacao() {
        return 'Estou em todos os lugares!'
    },
    nome: 'Sistema Legal'
})