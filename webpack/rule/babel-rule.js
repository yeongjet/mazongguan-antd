module.exports = [
    {
        test: /\.ts(x?)$/,
        use: [
            {
                loader: 'babel-loader',
                options: {
                    babelrc: false,
                    presets: [
                        '@babel/preset-env',
                        '@babel/preset-react',
                        '@babel/preset-typescript'
                    ],
                    plugins: [
                        [
                            'import',
                            {
                                libraryName: 'antd',
                                libraryDirectory: 'es',
                                style: 'css' // `style: true` 会加载 less 文件
                            }
                        ],
                        [
                            '@babel/plugin-transform-typescript',
                            {
                                allowNamespaces: true
                            }
                        ]
                    ]
                }
            }
        ]
    }
]
