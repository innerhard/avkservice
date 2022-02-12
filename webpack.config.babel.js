import path from 'path'

import HtmlWebpackPlugin from 'html-webpack-plugin'

import { aliases } from './configs/aliases'

module.exports = {
    entry: ['babel-polyfill', './pages/index.tsx'],
    mode: 'development',
    output: {
        filename: './main.js',
        publicPath: '/',
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        historyApiFallback: true,
        port: 9000,
        progress: true,
        watchContentBase: true,
        proxy: {
            '/query': {
                target: 'http://localhost:8080/',
                changeOrigin: true,
            },
            '/api': {
                target: 'http://localhost:8080/',
                secure: false,
                changeOrigin: true,
                headers: {
                    Connection: 'keep-alive',
                },
                pathRewrite: {
                    '^/api': '',
                },
            },
        },
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.mjs$/,
                include: /node_modules/,
                type: 'javascript/auto',
            },
            {
                test: /\.(js|jsx|ts|tsx)$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                        },
                    },
                ],
            },
            {
                test: /\.(png|svg|jpg|gif|mp3)$/,
                use: ['file-loader'],
            },
        ],
    },
    resolve: {
        alias: aliases,
        extensions: ['*', '.js', '.jsx', '.ts', '.tsx', '.css'],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            favicon: './public/favicon.ico',
        }),
    ],
}
