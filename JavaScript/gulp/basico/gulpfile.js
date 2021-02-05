const gulp = require('gulp')

const { series, parallel } = require('gulp')
// const series = gulp.series

const antes1 = callback => {
    console.log('Tarefa antes 1!')
    return callback()
}

const antes2 = callback => {
    console.log('Tarefa antes 2!')
    return callback()
}

function copiar(callback) {
    // gulp.src(['pastaA/arquivo1.txt', 'pastaA/arquivo2.txt'])

    gulp.src('pastaA/**/*.txt')
    // pipe = aplica transformações nos arquivos que selecionamos
        .pipe(gulp.dest('pastaB'))
    // dest = coloca os arquivos em uma pasta de destino.
    return callback()
}

const fim = callback => {
    console.log('Tarefa Fim!')
    return callback()
}

module.exports.default = series(
    parallel( antes1, antes2),
    copiar,
    fim
)