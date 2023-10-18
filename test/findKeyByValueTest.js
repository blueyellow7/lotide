const assertEqual = require('../assertEqual');
const findKeyByValue = require('../findKeyByValue');

console.log("#findKeyByValue");

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sci_fi");
assertEqual(findKeyByValue(bestTVShowsByGenre, "Stranger things"), undefined);
