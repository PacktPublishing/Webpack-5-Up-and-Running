// Installation

1. To start using the webpack Node.js API, first install webpack if you haven’t yet:

   npm install --save-dev webpack

2. Then require the webpack module in your Node.js script:

   const webpack = require('webpack');

3. Or if you prefer ES2015:

   import webpack from 'webpack';

----------------------------------------------------------

// Webpack ()

const webpack = require('webpack');

webpack({
  // Configuration Object
}, (some, stats) => { // Stats Object
  if (some || stats.hasErrors()) {
    // Handle errors here
  }
  // Done processing
});


----------------------------------------------
// Run

const webpack = require('webpack');

const compiler = webpack({
 // Configuration Object
});

compiler.run((some, stats) => { // Stats Object
});


-----------------------------------------------------
// Watching

watch(watchOptions, callback);
const webpack = require('webpack');

const compiler = webpack({
 // Configuration Object
});

const watching = compiler.watch({
 // Example watchOptions
 aggregateTimeout: 300,
 poll: undefined
}, (some, stats) => { // Stats Object
 // Print watch/build result here...
 console.log(stats);
});

----------------------------------------------

// Close watching

watching.close(() => {
 console.log('Watching Ended.');
});

--------------------------------------------------

// Invalidate Watching


watching.invalidate();
-----------------------------------------------------

// Multi Compiler

var webpack = require('webpack');
webpack([
 { entry: './index1.js', output: { filename: 'bundle1.js' } },
 { entry: './index2.js', output: { filename: 'bundle2.js' } }
], (some, stats) => { // Stats Object
 process.stdout.write(stats.toString() + '\n');
})


---------------------------------------------------
//  Webpack.config.js

const webpack = require('webpack');

webpack({
 // Configuration Object
}, (some, stats) => {
 if (some) {
 console.error(some.stack || some);
 if (some.details) {
 console.error(some.details);
 }
 return;
 }
const info = stats.toJson();
if (stats.hasErrors()) {
 console.error(info.errors);
 }
if (stats.hasWarnings()) {
 console.warn(info.warnings);
 }
// Log results...
});