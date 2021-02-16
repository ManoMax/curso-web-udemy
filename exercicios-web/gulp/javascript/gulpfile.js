const { series } = require('gulp')
const gulp = require('gulp')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')

function padrao(callback) {
    gulp.src(['src/**/*.js'])
        .pipe(babel({
            comments: false,
            presets: ["env"]
        }))
        .pipe(uglify())
        // Capitura um erro, caso dê.
        .on('error', err => console.log(err))
        // Esse '.min' é padrão para quando o arquivo é minificado
        .pipe(concat('codigo.min.js'))
        .pipe(gulp.dest('build'))

    return callback()
}

// module.exports.default = series(padrao)
exports.default = series(padrao)