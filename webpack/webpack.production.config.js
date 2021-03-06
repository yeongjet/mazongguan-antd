const path = require('path')
const { babelRule, styleRule } = require('./rule')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

const fileExtension = ['.ts', '.tsx', '.js', 'jsx']

module.exports = {
    mode: 'production',
    entry: './src/app.tsx',
    resolve: {
        extensions: fileExtension,
        plugins: [
            new TsconfigPathsPlugin({
                configFile: path.resolve(__dirname, '../tsconfig.json'),
                extensions: fileExtension
            })
        ]
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
