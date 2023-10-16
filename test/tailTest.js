const assert = require("chai").assert;
const tail = require("../tail");

describe("#tail", () => {
  it ("returns ['Lighthouse', 'Labs'] for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });

  it ("returns [2, 3, 4] for [1, 2, 3, 4]", () => {
    assert.deepEqual(tail([1, 2, 3, 4]), [2, 3, 4]);
  });

  it ("returns [] for [10]", () => {
    assert.deepEqual(tail([10]), []);
  });
});

// const assertEqual = require('../assertEqual');
// const tail = require('../tail');

// Test cases

// let array1 = tail([5, 6, 7, 10]);
// assertEqual(array1.length, 3);

// let array2 = tail(["Hello", "Lighthouse", "Labs"]);
// assertEqual(array2.length, 2);

// let array3 = tail([10]);
// assertEqual(array3.length, 0);

// let array4 = tail([]);
// assertEqual(array4.length, 0);