const assertArraysEqual = require('../assertArraysEquals');

console.log("#assertArraysEqual");

assertArraysEqual([1, 2, 3], [1, 2, 3]); // shoud pass
assertArraysEqual([5, 6, "8", 9, 10], [5, 6, 8, 9, 10]); // should fail
assertArraysEqual(["light", "house", "labs"], ["light", "house"]); // should fail