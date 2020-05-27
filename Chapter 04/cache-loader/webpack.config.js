module.exports = {
  module: {
    rules: [
      {
        test: /\.ext$/,
        use: ['cache-loader', 'babel-loader'],
        include: path.resolve('src'),
      },
    ],
  },
};
