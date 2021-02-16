let a = 2

module.exports = {
    bomDia: 'Bom dia',
    boaNoite() {
        return 'Boa noite'
    }
}

// Não funciona:

/**
 * 
exports = {
    bomDia: 'Bom dia',
    boaNoite() {
        return 'Boa noite'
    }
}
 * 
 */

/**
 * 
this = {
    bomDia: 'Bom dia',
    boaNoite() {
        return 'Boa noite'
    }
}
 * 
 */