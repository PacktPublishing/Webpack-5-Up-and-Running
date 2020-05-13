module.exports = {
    module: {
        rules: [{
            test: /\.exec\.js$/,
            use: ['script-loader']
        }]
    }
}