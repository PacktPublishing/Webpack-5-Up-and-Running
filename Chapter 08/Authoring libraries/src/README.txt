The usage specification for the library use will be as follows:

// ES2015 module import:
import * as webpackNumbers from 'webpack-numbers';
// ...
webpackNumbers.wordToNum('Two');

-----------------------------------------
// CommonJS module require:
const webpackNumbers = require('webpack-numbers');
// ...
webpackNumbers.wordToNum('Two');


------------------------------------------------------
// AMD module require:
require(['webpackNumbers'], function (webpackNumbers) {
  // ...
  webpackNumbers.wordToNum('Two');
});

--------------------------------------------------------------------
The consumer also can use the library by loading it via a script tag:

<!doctype html>
<html>
  ...
  <script src="https://unpkg.com/webpack-numbers"></script>
  <script>
    // ...
    // Global variable
    webpackNumbers.wordToNum('Five')
    // Property in the window object
    window.webpackNumbers.wordToNum('Five')
    // ...
  </script>
</html>