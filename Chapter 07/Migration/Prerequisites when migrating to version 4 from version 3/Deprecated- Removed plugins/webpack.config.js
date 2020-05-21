// These plugins can be removed from configuration as they are default in production mode:


module.exports = {
 plugins: [
   new NoEmitOnErrorsPlugin(),
   new ModuleConcatenationPlugin(),
   new DefinePlugin({ "process.env.NODE_ENV": JSON.stringify("production") })
   new UglifyJsPlugin()
 ],
 }