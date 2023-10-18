const assertArraysEqual = require('../assertArraysEquals');
const without = require('../without');

console.log("#without");

assertArraysEqual(without(["hello", "world", "lighthouse"], ["lighthouse"]), ["hello", "world"]); 
assertArraysEqual(without(["1", "2", "3", "5"], [2, 3, "3", "5"]), ["1", "2"]); 
assertArraysEqual(without(["hello", 2, "3", 5], [2, 3, "5"]), ["hello", "3", 5]); 

