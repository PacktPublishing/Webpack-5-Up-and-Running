module.exports = {
  rules: [
    {
      test: /config\.json$/,
      loader: 'special-loader',
    type: 'javascript/auto',
      options: {...}
    }
  ]
};