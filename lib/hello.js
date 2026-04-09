/**
 * Hello library
 * Provides: sayHello(name) and sayGoodbye(name)
 * Depends on: $utils (from utils.js)
 */

(function (global) {

  var hello = {};

  // sayHello: prints "Hello <name>" using the utils library
  hello.sayHello = function (name) {
    $utils.printToScreen("Hello " + name);
  };

  // sayGoodbye: prints "Goodbye <name>" using the utils library
  hello.sayGoodbye = function (name) {
    $utils.printToScreen("Goodbye " + name);
  };

  global.$hello = hello;

})(window);
