const middle = require('../middle');
const assert = require('chai').assert;

describe("#middle", () => {
  it("returns [] when [1,2]]", () => {
    assert.deepEqual(middle([1,2]),[]);
  });
  it("returns no array passed for []", () => {
    assert.strictEqual(middle([]),'no array passed');
  });
  it("returns 4 for [1,2,3,4,5,6,7]", () => {
    assert.deepEqual(middle([1,2,3,4,5,6,7]),[4]);
  });
});

