const webpack = require('webpack')

module.exports = {
    // mode: 'production',
    mode: 'development',
    entry: './src/principal.js',
    output: {
        filename: 'principal.js',
        path: __dirname + '/public'
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: [
                'style-loader', // Adiciona CSS a DOM injetando a tag <style>
                'css-loader' // interpreta @import, url()...
            ]
        }]
    }
}