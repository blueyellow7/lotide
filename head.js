// assertEqual function

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return `🎉🎉🎉 Assertion passed ${actual} === ${expected}`;
  } else {
    return `❌❌❌ Assertion passed ${actual} !== ${expected}`;
  }
};

const head = function(arrayValue) {
  return arrayValue[0];
}

console.log(head([])) 
console.log(head([1])) 
console.log(assertEqual(head([5,6,7]), 5)) 
console.log(assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello")) 


