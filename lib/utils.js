/**
 * Utility library
 * Provides: printToScreen(message)
 * Uses console.log to print a message
 */

(function (global) {

  var utils = {};

  // printToScreen: prints the given message to the browser console
  utils.printToScreen = function (message) {
    console.log(message);
  };

  global.$utils = utils;

})(window);
