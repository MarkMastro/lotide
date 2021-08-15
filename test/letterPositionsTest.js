const assert = require('chai').assert;
const letterPositions   = require('../letterPositions');

const expected = {
  C: [ 0 ],
  o: [ 1 ],
  m: [ 2, 15 ],
  p: [ 3 ],
  l: [ 4 ],
  e: [ 5, 7, 16 ],
  t: [ 6, 18 ],
  A: [ 9 ],
  s: [ 10, 11 ],
  i: [ 12 ],
  g: [ 13 ],
  n: [ 14, 17 ]
};
describe("#letterPositions", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.deepEqual(letterPositions('Complete Assignment'),expected);
  });

});
