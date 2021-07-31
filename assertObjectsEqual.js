
const eqArrays = function(actual, expected) {
  
  if (actual.length === expected.length) {
    for (let i = 0; i < actual.length; i++) {
      if (actual[i] !== expected[i]) {
        return false;
      }
    } return true;
  } else {
    return false;
  }
};
const eqObjects = function(actual, expected) {

  if (Object.keys(actual).length === Object.keys(expected).length) {
    for (let key in actual) {
    
      if (Array.isArray(actual[key]) && Array.isArray(expected[key])) {
        
        if (eqArrays(actual[key],expected[key])) {
        
          continue;
        } else {
         
          return false;
        }
      } else if (actual[key] === expected[key]) {
        continue;
      } else if (true) {
        return false;
      }
    } return true;
  } else {
    return false;
  }
  
};


const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  let boolean=eqObjects(actual,expected);
    
    boolean?console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`): console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`)
  
};
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab, ba); // => true

const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(ab, abc); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(cd, cd2); // => false


