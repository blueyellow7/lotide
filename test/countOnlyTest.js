const assert = require('chai').assert;
const countOnly = require("../counttOnly");

const Names = [
  "Mike",
  "Will",
  "Jim",
  "Joyce",
  "Jonathan",
  "Nancy",
  "Lucas",
  "Max",
  "Nancy"
];

describe("#countOnly", () => {
  it("should return { 'Mike': 1, 'Nancy': 2 } for { 'Mike': true, 'Robin': true, 'Nancy': true }", () => {
    assert.deepEqual(countOnly(Names, { "Mike": true, "Robin": true, "Nancy": true }), { "Mike": 1, "Nancy": 2 });
  });

  it("should return { 'Will': 1 } for { 'Mike': false, 'Will': true}", () => {
    assert.deepEqual(countOnly(Names, { "Mike": false, "Will": true}), { 'Will': 1 });
  });
});