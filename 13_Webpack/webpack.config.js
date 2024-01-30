const modoDev = process.env.NODE_ENV !== 'production'
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TersePlugin = require('terser-webpack-plugin')
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
// const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
// Webpack não precisa mais tanto dos dois plugins acima

module.exports = {
    mode: modoDev ? 'development' : 'production',
    entry: './src/principal.js',
    output: {
        filename: 'principal.js',
        path: __dirname + '/public'
    },
    // optimization: {
    //     // Não se usa mais o trecho de código abaixo
    //     // minimizer: [
    //     //     new UglifyJsPlugin({
    //     //         // cash: true,      // Essas duas propriedades foram adicionadas
    //     //         // parallel: true   // no curso, porém não são necessarias.
    //     //     }),
    //     //     new OptimizeCSSAssetsPlugin({})
    //     // ]
    // },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "estilo.css"
        }),
        new TersePlugin({
            parallel: true,
            terserOptions: {
                ecma: 6
            }
        })
    ],
    module: {
        rules: [{
            test: /\.s?[ac]ss$/,
            use: [
                MiniCssExtractPlugin.loader,
                // 'style-loader',     // Adiciona CSS a DOM injetando a tag <style>
                'css-loader',          // interpreta @import, url()...
                'sass-loader'
            ]
        }]
    }
}