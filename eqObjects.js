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

// assertEqual function
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🎉🎉🎉 Assertion passed ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion failed ${actual} !== ${expected}`);
  }
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


// TEST CASES
const shirt1 = { color: "red", size: "medium" };
const shirt2 = { size: "medium", color: "red" };
const shirt3 = { size: "medium", color: "red", sleeveLength: "long" };

assertEqual(eqObjects(shirt1, shirt2), true);
assertEqual(eqObjects(shirt1, shirt3), false);

const arrayShirt1 = { colors: ["red", "blue"], size: "medium" };
const arrayShirt2 = { size: "medium", colors: ["red", "blue"]};
const arrayShirt3 = { size: "medium", colors: ["red", "blue", "green"] };
const arrayShirt4 = { size: "medium", colors: ["red", "blue"], sleevelength: "long" };

assertEqual(eqObjects(arrayShirt1, arrayShirt2), true);
assertEqual(eqObjects(arrayShirt1, arrayShirt3), false);
assertEqual(eqObjects(arrayShirt1, arrayShirt3), false);
assertEqual(eqObjects(arrayShirt3, arrayShirt4), false);


module.exports = eqObjects;
