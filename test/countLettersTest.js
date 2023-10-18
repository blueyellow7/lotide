const countLetters = require('../countLetters.js');
const assert = require('chai').assert;

describe("#countLetters", () => {
  it("should return { b: 3, u: 1, m: 1, l: 1, e: 3 } from 'bumblebee'", () => {
    assert.deepEqual(countLetters("bumblebee"), { b: 3, u: 1, m: 1, l: 1, e: 3 })
  });

  it("should return { a: 1, b: 1, e: 2 } from 'a bee'", () => {
    assert.deepEqual(countLetters("a bee"), { a: 1, b: 1, e: 2 });
  });
}); 
