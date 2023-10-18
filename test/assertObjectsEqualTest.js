const assertObjectsEqual = require("../assertObjectsEqual");

console.log("#assertObjectsEqual")

assertObjectsEqual({a: 1, b: 2}, {a: 1, b: 2}); // should pass
assertObjectsEqual({a: 1, b: 2, c: 3}, {a: 1, b: 2}); // should fail