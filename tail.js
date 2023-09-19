const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return `🎉🎉🎉 Assertion passed ${actual} === ${expected}`;
  } else {
    return `❌❌❌ Assertion passed ${actual} !== ${expected}`;
  }
};

const tail = function(array) {
  return array.slice(1);
};


const nums = [1, 2, 3];
console.log(tail(nums));
console.log(assertEqual(nums.length, 3)); //insuring that original array is not changed by function

const anotherArray = [17];
console.log(tail(anotherArray)); // testing for array with only 1 element

