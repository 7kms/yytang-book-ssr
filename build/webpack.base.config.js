const path = require('path')
const vueConfig = require('./vue-loader.config')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')

const isProd = process.env.NODE_ENV === 'production'

module.exports = {
    entry: {
        app: './src/entry-client.js',
        vendor: [
            'vue',
            'vuex',
            'vue-router',
            'vuex-router-sync'
        ]
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        publicPath: '/dist/',
        filename: '[name].[chunkhash:6].js'
    },
    resolve: {
        alias: {
            'src': path.resolve(__dirname, '../src'),
            'public': path.resolve(__dirname, '../public')
        }
    },
    module: {
        rules: [{
                enforce: 'pre',
                test: /.vue$/,
                loader: 'eslint-loader',
                exclude: /node_modules/
            },
            {
                test: /.vue$/,
                loader: 'vue-loader',
                exclude: /node_modules/,
                options: vueConfig
            },
            {
                test: /.css$/,
                loader: ['style-loader', 'css-loader']
            },
            {
                test: /.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /.(eot|ttf|woff|woff2)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[hash:6].[ext]'
                }
            }
        ]
    },
    performance: {
        maxEntrypointSize: 300000,
        hints: 'warning'
    },
    plugins: isProd ? [] : [
        new FriendlyErrorsPlugin()
    ]
}