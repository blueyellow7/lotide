const assertEqual = require('../assertEqual');

console.log("#assertEqual");

assertEqual("Neeha", "Neeha"); // should pass
assertEqual("Neeha", "Lighthouse"); // should fail
assertEqual(72, 72); // should pass
assertEqual(17, 86); // should fail
