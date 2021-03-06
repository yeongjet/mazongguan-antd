const path = require('path')
const { babelRule, styleRule, fileRule } = require('./rule')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

const fileExtension = ['.ts', '.tsx', '.js', 'jsx']

module.exports = {
    mode: 'development',
    entry: './src/app.tsx',
    devtool: 'source-map',
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
        rules: [...babelRule, ...styleRule, ...fileRule]
    },
    plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })],
    devServer: {
        port: 9030,
        open: true,
        hot: true
    }
}
