import _ from 'lodash';
  import printMe from './print.js';

  function component() {
    const element = document.createElement('div');
    const btn = document.createElement('button');

    element.innerHTML = _.join(['Hello', 'Webpack'], ' ');

    btn.innerHTML = 'Click here then check the console!';
    btn.onclick = printIt();
 
    element.appendChild(btn);

    return element;
  }

  document.body.appendChild(component());