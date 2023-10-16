const flatten = require('../flatten.js');
const assert = require('chai').assert;

describe('#flatten', () => {
  it('should return [1, "2", 3, 4, 5, 6] for [1, "2", [3, 4, 5], [6]]', () => {
    assert.deepEqual(flatten([1, "2", [3, 4, 5], [6]]), [1, "2", 3, 4, 5, 6]);
  });

  it("should return ['tomato', 'apple', 'banana'] for [['tomato'], ['apple', 'banana']]", () => {
    assert.deepEqual(flatten([['tomato'], ['apple', 'banana']]), ['tomato', 'apple', 'banana']);
  });
  it('should return [1, 2, 3, 4] from [1, [2, 3, 4]]', () => {
    assert.deepEqual(flatten([1, [2, 3, 4]]), [1, 2, 3, 4]);
  });
});



