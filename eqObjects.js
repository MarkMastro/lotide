const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected} `);
  }
  console.assert(actual === expected,  ` 🛑🛑🛑 ${actual} !== ${expected} `);
};
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



const eqObjects = function(object1, object2) {

  if (Object.keys(object1).length === Object.keys(object2).length) {
    for (let key in object1) {
    
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        
        if (eqArrays(object1[key],object2[key])) {
          
          continue;
        } else {
          return false;
        }
      } else if (object1[key] === object2[key]) {
        continue;
      } else if (true) {
        return false;
      }
    } return true;
  } else {
    return false;
  }
  
};



const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc)); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2)); // => false


