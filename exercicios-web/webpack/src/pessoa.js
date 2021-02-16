// Mesmo sem importar na principal.js, se:
// import './modulos/moduloA'
// O comando 'npm start ; node dist/main.js' irá encontrar o Module B

// O comando foi atualizado, manualmente, para 'npm start ; node public/principal.js'

export default class Pessoa {
    cumprimentar() {
        return 'Bom dia!'
    }
}