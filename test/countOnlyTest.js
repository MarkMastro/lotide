const assert = require('chai').assert;
const countOnly   = require('../countOnly');
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

describe("#head", () => {
  it("returns { Jason: 1, Fang: 2 } when passed firstNames", () => {
    assert.deepEqual(countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false }),{ Jason: 1, Fang: 2 });
  });
  
});
