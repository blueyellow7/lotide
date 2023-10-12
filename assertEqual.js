const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🎉🎉🎉 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

console.log(assertEqual("Hello", "Hello")); // passed
console.log(assertEqual("Hi", "Hello")); // failed

console.log(assertEqual(1, 1)); // passed
console.log(assertEqual(1, 100)); // failed


