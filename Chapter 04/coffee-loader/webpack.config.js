module.exports = {
    module: {
        rules: [{
            test: /\.coffee.md$/,
            use: [{
                loader: 'coffee-loader',
                options: {
                    literate: true
                }
            }]
        }]
    }
}