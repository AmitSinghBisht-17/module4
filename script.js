/**
 * Module 4 Assignment - script.js
 *
 * Loop over an array of names.
 * - If name starts with 'j' or 'J' => sayGoodbye(name)
 * - Otherwise                       => sayHello(name)
 */

(function () {

  var names = [
    "Marley",
    "Jamal",
    "Jennifer",
    "Marcus",
    "Joe",
    "Sam",
    "Julie",
    "Anna",
    "Jordan",
    "Beth"
  ];

  for (var i = 0; i < names.length; i++) {
    var name = names[i];

    if (name.charAt(0).toLowerCase() === 'j') {
      $hello.sayGoodbye(name);
    } else {
      $hello.sayHello(name);
    }
  }

})();
