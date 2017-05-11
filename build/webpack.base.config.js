const path = require('path')
const vueConfig = require('./vue-loader.config')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const isProd = process.env.NODE_ENV === 'production'

module.exports = {
    devtool: isProd
        ? false
        : '#cheap-module-source-map',
    entry: {
        app: './src/entry-client.js',
        vendor: [
            'babel-polyfill',
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
            'api': path.resolve(__dirname, '../src/util/api'),
            'actionTypes': path.resolve(__dirname, '../src/store/action-types'),
            'src': path.resolve(__dirname, '../src'),
            'public': path.resolve(__dirname, '../public')
        }
    },
    module: {
        noParse: /es6-promise\.js$/, // avoid webpack shimming process
        rules: [{
                enforce: 'pre',
                test: /.vue$/,
                use: 'eslint-loader',
                exclude: /node_modules/
            },
            {
                test: /.vue$/,
                use: [{
                    loader: 'vue-loader',
                    options: vueConfig
                }],
                exclude: /node_modules/

            },
            {
                test: /.css$/,
                use: ExtractTextPlugin.extract({
                    use: [{
                        loader: 'css-loader',
                        options: { modules: false }
                    }]
                })
            },
            {
                test: /.less$/,
                use: ExtractTextPlugin.extract({
                    use: [{ loader: 'css-loader' }, {
                        loader: 'postcss-loader',
                        options: {
                            plugins: [require('autoprefixer')({
                                browsers: ['last 10 versions']
                            })]
                        }
                    }, { loader: 'less-loader' }]
                })
            },
            {
                test: /.js$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: [/.(eot|ttf|woff|woff2)$/, /\.(png|jpe?g|gif|svg)(\?\S*)?$/],
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[hash:6].[ext]'
                    }
                }]
            }
        ]
    },
    performance: {
        maxEntrypointSize: 300000,
        hints: 'warning'
    },
    plugins: [
        new ExtractTextPlugin('[name].[contenthash:6].css'),
        new FriendlyErrorsPlugin()
    ]
}