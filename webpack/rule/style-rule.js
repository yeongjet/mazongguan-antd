const path = require('path')

module.exports = [
    {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader']
    }
]
