const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return `🎉🎉🎉 Assertion passed ${actual} === ${expected}`;
  } else {
    return `❌❌❌ Assertion failed ${actual} !== ${expected}`;
  }
};

const tail = function(array) {
  return array.slice(1);
};