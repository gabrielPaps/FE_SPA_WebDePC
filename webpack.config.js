const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    'style-loader', 'css-loader'
                    ]
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                  'style-loader', 'css-loader', 'sass-loader',
                    ]
            }
        ]
    }
};