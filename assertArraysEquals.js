const eqArrays = require('./eqArrays');

const assertArraysEqual = function(arr1, arr2){
  if (eqArrays(arr1, arr2) === true) {
    console.log(`🎉🎉🎉 Assertion passed ${arr1} === ${arr2}`);
  } else {
    console.log(`❌❌❌ Assertion failed ${arr1} !== ${arr2}`);
  }
};

// exporting for assertArraysEqualTest file
module.exports = assertArraysEqual;

