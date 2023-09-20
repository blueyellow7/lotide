const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return `🎉🎉🎉 Assertion passed ${actual} === ${expected}`;
  } else {
    return `❌❌❌ Assertion passed ${actual} !== ${expected}`;
  }
};

const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    } 
  } return true;
};

console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true))
console.log(assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true))
console.log(assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), true))
