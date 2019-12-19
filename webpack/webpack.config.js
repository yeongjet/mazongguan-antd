const path = require('path')
const { babelRule, styleRule } = require('./rule')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'production',
    entry: './src/app.tsx',
    devtool: 'source-map',
    resolve: {
        extensions: ['.ts', '.tsx', '.js', 'jsx']
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [...babelRule, ...styleRule]
    },
    plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })]
}
