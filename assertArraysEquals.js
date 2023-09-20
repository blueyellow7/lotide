
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

console.log(assertArraysEqual([1, 2, 3], [1, 2, 3]))