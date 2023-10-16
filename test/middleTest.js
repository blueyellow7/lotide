const assertArraysEqual = require('../assertArraysEquals');
const middle = require('../middle');


// Test Cases

assertArraysEqual(middle([5, 6, 7, 8, 9]), [7]);

assertArraysEqual(middle([5, 6, 7, 8]), [6, 7]);

assertArraysEqual(middle([5, 6]), []);

assertArraysEqual(middle(["hi", "bonjour", "hola", "namaste"]), ["bonjour", "hola"]);
