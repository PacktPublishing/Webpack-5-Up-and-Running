function sayHello() {
  import('./non-esm.js').then(module => {
    module.default.sayHello();
  });
}