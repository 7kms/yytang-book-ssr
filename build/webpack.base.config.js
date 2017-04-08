const path = require('path')
const vueConfig = require('./vue-loader.config')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')

const isProd = process.env.NODE_ENV === 'production'

module.exports = {
    entry:{
        app: './scr/entry-client.js',
        vendor:[
            'vue',
            'vuex',
            'vue-router',
            'vue-router-sync'
        ]
    },
    output:{
        path: path.resolve(__dirname,'../dist'),
        publicPath: '/dist/',
        filename: '[name].[chunkhash:6].js'
    },
    resolve: {
        alias:{
            'src': path.resolve(__dirname,'../src'),
            'public': path.resolve(__dirname,'../public')
        }
    },
    module:{
        rules:[
            {
                enforce:'prev',
                test:/.vue$/,
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
                test: /.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
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