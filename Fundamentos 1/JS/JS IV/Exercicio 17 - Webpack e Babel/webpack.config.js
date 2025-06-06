const path = require('path')

module.exports = {
    devServer: {
        static:{
            directory: path.resolve(__dirname, 'dist')
        }
    },
    entry: {
        index: './src/index.js'
    },
    mode: 'production',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].min.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: ['babel-loader']
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ] 
    }
}