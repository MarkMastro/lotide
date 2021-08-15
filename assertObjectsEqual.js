
const eqObjects = require('./eqObjects');

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  let boolean = eqObjects(actual,expected);
    
  boolean ? console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`) : console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  
};
module.exports = assertObjectsEqual;


