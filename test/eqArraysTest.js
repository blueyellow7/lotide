const assert = require('chai').assert;
const eqArrays = require('../eqArrays');

describe("#eqArrays", () => {
  it("should return true for [1, 2, 3, 4] and [1, 2, 3, 4]", () => {
    assert.strictEqual(eqArrays([1, 2, 3, 4], [1, 2, 3, 4]), true);
  });

  it("should return false for [3, 2] and [3, 2, 1]", () => {
    assert.strictEqual(eqArrays([3, 2], [3, 2, 1]), false);
  });

  it("should return true for ['5', '6', '7'] and ['5', '6', '7']", () => {
    assert.strictEqual(eqArrays(['5', '6', '7'], ['5', '6', '7']), true);
  });

  it("should return false for ['5', '6', '7'] and ['8', '9', '10']", () => {
    assert.strictEqual(eqArrays(['5', '6', '7'], ['8', '9', '10']), false);
  });

  it("should return false for ['5', '6', '7'] and ['5', '6', 7]", () => {
    assert.strictEqual(eqArrays(['5', '6', '7'], ['5', '6', 7]), false);
  });
});



