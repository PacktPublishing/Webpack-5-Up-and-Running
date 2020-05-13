const VueLoaderPlugin = require('vue-loader/lib/plugin')
module.exports = {
    module: {
     rules: [
     // other rules
      {
       test: /\.vue$/,
       loader: 'vue-loader'
      }
      ]
     },
     plugins: [
     // make sure to include the plugin.
         new VueLoaderPlugin()
     ]
}