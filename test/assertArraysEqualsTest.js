const assertArraysEqual = require('../assertArraysEquals');
const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

// Test Cases

assertArraysEqual([1, 2, 3], [1, 2, 3]);

assertArraysEqual([5, 6, "8", 9, 10], [5, 6, 8, 9, 10]); // should fail

assertArraysEqual(["light", "house", "labs"], ["light", "house"]); // should fail