//TESTING ASSERTION OF FUNCTIONS

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

const assertArraysEqual = function (arr1, arr2) {
  if (eqArrays(arr1, arr2) === true) {
    console.log(`🎉🎉🎉 Assertion passed ${arr1} === ${arr2}`);
  } else {
    console.log(`❌❌❌ Assertion failed ${arr1} !== ${arr2}`);
  }
};

// ACTUAL FUNCTION 

const middle = function(array) {
  if (array.length <= 2) {
    return [];
  } else if (array.length % 2 !== 0) { 
    return [array[Math.floor(array.length / 2)]];
  } else if (array.length % 2 === 0) { 
    return [array[array.length / 2 - 1], array[array.length/2]];
  }
};

// TEST CODE

assertArraysEqual(middle([5, 6, 7, 8, 9]), [7]);
assertArraysEqual(middle([5, 6, 7, 8]), [6, 7]);
assertArraysEqual(middle([5, 6]), []);
