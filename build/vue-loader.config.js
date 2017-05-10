module.exports = {
    extractCSS: process.env.NODE_ENV === 'production',
    preserveWhitespace: false,
    postcss: [
        require('autoprefixer')({
            browsers: ['last 3 versions']
        })
    ],
    cssModules: {
        localIdentName: '[local]-[hash:base64:5]',
        camelCase: true
    }
}