const assertArraysEqual = require('../assertArraysEquals');
const letterPositions = require('../letterPositions');

console.log("#letterPositions");

assertArraysEqual(letterPositions("hello").l, [2, 3]); // should pass
assertArraysEqual(letterPositions("hello").h, [1]); // should fail
