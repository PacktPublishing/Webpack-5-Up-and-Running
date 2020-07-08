const path = require('path');
module.exports = {
 mode: 'development',
 entry: {
   index: './src/index.js',
   another: './src/another-module.js',
 },
 output: {
 filename: '[name].bundle.js',
   chunkFilename: '[name].bundle.js',
 path: path.resolve(__dirname, 'dist')
 },
 };
