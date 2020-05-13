const path = require('path');
module.exports = {
 entry: './src/index.js',
 output: {
 path: path.resolve(__dirname, 'dist'),
 filename: 'numbers-to-text.js'
   }
   },
   externals: {
   lodash: {
   commonjs: 'lodash',
   commonjs2: 'lodash',
   amd: 'lodash',
    root: '_'
   }
   }
 };