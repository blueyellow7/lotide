// ASSERT ARRAYS EQUAL FUNCTION
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

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2) === true) {
    console.log(`🎉🎉🎉 Assertion passed ${arr1} === ${arr2}`);
  } else {
    console.log(`❌❌❌ Assertion failed ${arr1} !== ${arr2}`);
  }
};

// MAP FUNCTION
const map = function(array, callback) {
  let results = [];
  for (let item of array) {
    results.push(callback(item));
  } return results;
};


// TEST
const mapTest1 = map(["ground", "control", "to", "major", "tom"], word => word[0]);
assertArraysEqual(mapTest1, ["g", "c", "t", "m", "t"]);

const mapTest2 = map([1, 2, 3, 4], x => (x * 2));
assertArraysEqual(mapTest2, [2, 4, 6, 8]);


const mapTest3 = map(["cats", "dogs", "frogs"], word => `${word} are cute`);
assertArraysEqual(mapTest3, ["cats are cute", "dogs are cute", "frogs are cute"]);


const mapTest4 = map(["cats", "dogs", "frogs"], word => word.length);
assertArraysEqual(mapTest4, [4, 4, 5]);


module.exports = map;