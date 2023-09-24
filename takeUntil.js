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


// TAKE UNTIL FUNCTION
const takeUntil = function(array, callback) {
  let results = [];
  for (let item of array) {

    if (!callback(item)) {
      results.push(item);
    } else if (callback(item)) {
      break;
    }
  } return results;
};


// TEST
const takeUntilTest1 = takeUntil([1, 2, 5, 7, 2, -1, 2, 4, 5], x => x < 0);
assertArraysEqual(takeUntilTest1, [1, 2, 5, 7, 2]);

const takeUntilTest3 = takeUntil([0, 1, 2, 3], n => n > 10);
assertArraysEqual(takeUntilTest3, [0, 1, 2, 3]);

const takeUntilTest2 = takeUntil(["I've", "been", "to", "Hollywood", ",", "and", "Redwood"], w => w === ',');
assertArraysEqual(takeUntilTest2, ["I've", 'been', 'to', 'Hollywood']);

const takeUntilTest4 = takeUntil(["cat", "dog", "frog", "horse"], word => word.length >= 5);
assertArraysEqual(takeUntilTest4, ["cat", "dog", "frog"]);

