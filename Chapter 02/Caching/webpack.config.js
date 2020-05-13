const path = require('path');
  const { CleanWebpackPlugin } = require('clean-webpack-plugin');
  const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
 entry: './src/index.js',
 plugins: [
 // new CleanWebpackPlugin(['dist/*']) for < v2 versions of CleanWebpackPlugin
 new CleanWebpackPlugin(),
 new HtmlWebpackPlugin({
  title: 'Output Management',
  title: 'Caching',
 }),
 ],
 output: {
  filename: 'bundle.js',
  filename: '[name].[contenthash].js',
 path: path.resolve(__dirname, 'dist'),
 },
 };