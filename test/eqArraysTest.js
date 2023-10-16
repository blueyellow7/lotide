const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');


// Test cases

assertEqual(eqArrays([1, 2, 3, 4], [1, 2, 3, 4]), true)

assertEqual(eqArrays([3, 2], [3, 2, 1]), false)

assertEqual(eqArrays(["5", "6", "7", "8"], ["5", "6", "7", "8"]), true)

assertEqual(eqArrays(["5", "6", "7"], ["7", "8", "9"]), false)

assertEqual(eqArrays(["5", "6", "7"], ["5", "6", 7]), false)



