const assert = require('chai').assert;
const without   = require('../without');

describe("#without", () => {
  it("returns returns [1,2,3] without 1-> [2,3]", () => {
    assert.deepEqual(without([1, 2, 3], [1]), [ 2, 3 ]);
  });
  it("returns returns [1]", () => {
    assert.deepEqual(without(["1", "2", "3"], [1, 2, "3","2"]), [ '1' ]);
  });
});
