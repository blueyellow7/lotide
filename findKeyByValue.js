// ASSERT EQUAL FUNCTION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🎉🎉🎉 Assertion passed ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion failed ${actual} !== ${expected}`);
  }
};


// FIND KEY FUNCTION 
const findKeyByValue = function (object, value) {
  for (let key in object) {
    if (object[key] === value)
      return key;
    else {
      return undefined
    }
  }
};


// TEST CASES
const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

console.log(findKeyByValue(bestTVShowsByGenre, "The Expanse"));
console.log(findKeyByValue(bestTVShowsByGenre, "Stranger Things"));

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sci_fi");
assertEqual(findKeyByValue(bestTVShowsByGenre, "Stranger things"), undefined);
