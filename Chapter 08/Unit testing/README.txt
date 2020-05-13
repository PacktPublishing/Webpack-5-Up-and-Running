1) npm install --save-dev jest babel-jest babel-preset-env

-----------------------------------------------------------------

2) // .babelrc
{
  "presets": [[
    "env",
    {
      "targets": {
        "node": "4"
      }
    }
  ]]
}

Our loader will process .txt files and simply replace any instance of [name] with the name option given to the loader. Then it will output a valid JavaScript module containing the text as its default export:
-----------------------------------------------------------------------------------------------------------------
3) // src/loader.js

import { getOptions } from 'loader-utils';

export default function loader(source) {
  const options = getOptions(this);

  source = source.replace(/\[name\]/g, options.name);

  return `export default ${ JSON.stringify(source) }`;
}
------------------------------------------------------------------------------------------------------------------
We'll use this loader to process the following file:

4) // test/example.txt

Hey [name]!

------------------------------------------------------------------------------------------------------------------
Pay close attention to this next step as we'll be using the Node.js API and memfs to execute webpack. This lets us avoid emitting output to disk and will give us access to the stats data which we can use to grab our transformed module:

5) npm install --save-dev webpack memfs

-----------------------------------------------------------------------------------------------------------------

6) // test/compiler.js

import path from 'path';
import webpack from 'webpack';
import { createFsFromVolume, Volume } from 'memfs';

export default (fixture, options = {}) => {
  const compiler = webpack({
    context: __dirname,
    entry: `./${fixture}`,
    output: {
      path: path.resolve(__dirname),
      filename: 'bundle.js',
    },
    module: {
      rules: [{
        test: /\.txt$/,
        use: {
          loader: path.resolve(__dirname, '../src/loader.js'),
          options: {
            name: 'Alice'
          }
        }
      }]
    }
  });

  compiler.outputFileSystem = createFsFromVolume(new Volume());

  return new Promise((resolve, reject) => {
    compiler.run((err, stats) => {
      if (err) reject(err);
      if (stats.hasErrors()) reject(new Error(stats.toJson().errors));

      resolve(stats);
    });
  });
};

------------------------------------------------------------------------------------------------------------

And now, finally, we can write our test and add an npm script to run it:

7) // test/loader.test.js

import compiler from './compiler.js';

test('Inserts name and outputs JavaScript', async () => {
  const stats = await compiler('example.txt');
  const output = stats.toJson().modules[0].source;

  expect(output).toBe('export default "Hey Alice!\\n"');
});

--------------------------------------------------------------------------------------------------

8) // package.json

{
  "scripts": {
    "test": "jest"
  }
}
---------------------------------------------------------------------------------------------------------


With everything in place, we can run it and see if our new loader passes the test:

 PASS  test/loader.test.js
  ✓ Inserts name and outputs JavaScript (229ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        1.853s, estimated 2s
Ran all test suites.

