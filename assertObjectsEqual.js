// eqArrays function
const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  } return true;
};

// eqObject function
const eqObjects = function(object1, object2) {
  let output = "";
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    output = false;
  } else {
    output = true;
  }
  for (const keyValue in object1) {
    if (Array.isArray(object1[keyValue]) && Array.isArray(object2[keyValue])) {
      if (!eqArrays(object1[keyValue], object2[keyValue])) {
        output = false;
      } else {
        output = true;
      }
    } else if (object1[keyValue] !== object2[keyValue]) {
      output = false;
    }
  } return output;
};

// assertObjectsEqual function
const inspect = require('util').inspect;
const assertArraysEqual = function(actual, expected) {
  if (eqObjects(actual, expected) === true) {
    console.log(`🎉🎉🎉 Assertion passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`❌❌❌ Assertion failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

// TEST
assertArraysEqual({a: 1, b: 2}, {a: 1, b: 2});
assertArraysEqual({a: 1, b: 2, c: 3}, {a: 1, b: 2});