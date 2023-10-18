const eqObjects = require('../eqObjects');
const assertEqual = require('../assertEqual');

console.log("#eqObjects");

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
