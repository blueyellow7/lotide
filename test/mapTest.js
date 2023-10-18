const assertArraysEqual = require('../assertArraysEquals');
const map = require('../map');

console.log("#map");

const mapTest1 = map(["ground", "control", "to", "major", "tom"], word => word[0]);
assertArraysEqual(mapTest1, ["g", "c", "t", "m", "t"]);

const mapTest2 = map([1, 2, 3, 4], x => (x * 2));
assertArraysEqual(mapTest2, [2, 4, 6, 8]);

const mapTest3 = map(["cats", "dogs", "frogs"], word => `${word} are cute`);
assertArraysEqual(mapTest3, ["cats are cute", "dogs are cute", "frogs are cute"]);

const mapTest4 = map(["cats", "dogs", "frogs"], word => word.length);
assertArraysEqual(mapTest4, [4, 4, 5]);

