const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const DIST_PATH = path.resolve(__dirname, 'dist');
const ENTRY_PATH = path.resolve(__dirname, 'src');

module.exports = {
    watch: true,
    entry: path.resolve(ENTRY_PATH, 'index.jsx'),
    output: {
        path: DIST_PATH,
        filename: 'main.js',
    },
    devServer: {
        port: 7000,
        contentBase: DIST_PATH,
        open: true,
    },
    plugins : [
        new HtmlWebpackPlugin({
            template: path.resolve(ENTRY_PATH, 'index.html')
        })
    ],
    module: {
        rules: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env', 'react', 'stage-0']
                    },
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            }
        ],
    }

};