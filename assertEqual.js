const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return `🎉🎉🎉 Assertion passed ${actual} === ${expected}`;
  } else {
    return `❌❌❌ Assertion failed ${actual} !== ${expected}`;
  }
};

console.log(assertEqual("Hello", "Hello")); // passed
console.log(assertEqual("Hi", "Hello")); // failed

console.log(assertEqual(1, 1)); // passed
console.log(assertEqual(1, 100)); // failed


