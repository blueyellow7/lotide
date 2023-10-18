const assertArraysEqual = require('../assertArraysEquals');
const takeUntil = require('../takeUntil');

console.log("#takeUntil");

const takeUntilTest1 = takeUntil([1, 2, 5, 7, 2, -1, 2, 4, 5], x => x < 0);
assertArraysEqual(takeUntilTest1, [1, 2, 5, 7, 2]);

const takeUntilTest3 = takeUntil([0, 1, 2, 3], n => n > 10);
assertArraysEqual(takeUntilTest3, [0, 1, 2, 3]);

const takeUntilTest2 = takeUntil(["I've", "been", "to", "Hollywood", ",", "and", "Redwood"], w => w === ',');
assertArraysEqual(takeUntilTest2, ["I've", 'been', 'to', 'Hollywood']);

const takeUntilTest4 = takeUntil(["cat", "dog", "frog", "horse"], word => word.length >= 5);
assertArraysEqual(takeUntilTest4, ["cat", "dog", "frog"]);