const assert = require("chai").assert;
const middle = require("../middle");

describe('#middle', () => {
  it ("returns [7] for [5, 6, 7, 8, 9]", () => {
    assert.deepEqual(middle([5, 6, 7, 8, 9]), [7]);
  });

  it ("returns [6, 7] for [5, 6, 7, 8]", () => {
    assert.deepEqual(middle([5, 6, 7, 8]), [6, 7]);
  });

  it ("returns [] for [5, 6]", () => {
    assert.deepEqual(middle([5, 6]), []);
  });

  it ("returns ['bonjour', 'hola'] for ['hi', 'bonjour', 'hola', 'namaste']", () => {
    assert.deepEqual(middle(['hi', 'bonjour', 'hola', 'namaste']), ['bonjour', 'hola']);
  });

});


// const assertArraysEqual = require('../assertArraysEquals');
// const middle = require('../middle');

// // Test Cases

// assertArraysEqual(middle([5, 6, 7, 8, 9]), [7]);

// assertArraysEqual(middle([5, 6, 7, 8]), [6, 7]);

// assertArraysEqual(middle([5, 6]), []);

// assertArraysEqual(middle(["hi", "bonjour", "hola", "namaste"]), ["bonjour", "hola"]);
