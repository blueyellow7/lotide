// ASSERT EQUAL FUNCTIONS

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return `🎉🎉🎉 Assertion passed ${actual} === ${expected}`;
  } else {
    return `❌❌❌ Assertion failed ${actual} !== ${expected}`;
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
const assertArraysEqual = function(arr1, arr2){
  if (eqArrays(arr1, arr2) === true) {
    console.log(`🎉🎉🎉 Assertion passed ${arr1} === ${arr2}`);
  } else {
    console.log(`❌❌❌ Assertion failed ${arr1} !== ${arr2}`);
  }
}

// LETTER POSITIONS FUNCTION 

const letterPositions = function(sentence) {
  const results = {}
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== " " && results[sentence[i]]) {
        results[sentence[i]].push(i);
      } else {
        results[sentence[i]] = [i];
      }
  } return results;
} 

// TEST

assertArraysEqual(letterPositions("hello").l, [2, 3]); // should pass
assertArraysEqual(letterPositions("hello").h, [1]); // should fail

module.exports = letterPositions;