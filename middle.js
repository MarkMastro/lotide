const eqArrays = function(actual, expected) {
  for (let i = 0; i < actual.length; i++) {
    if (actual[i] !== expected[i]) {
      console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected} `);
      return;
    }
  } console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected} `);
  return;
};

const middle=function(array){
 
  if(array.length % 2 === 0 && array.length>2){//even length array
    
    return [array[Math.floor(array.length / 2)-1],array[Math.floor(array.length / 2)]];
  }else if(array.length===0 ){
    return "no array passed";
  }else if(array.length !==0 && array.length>2){
    return [array[Math.floor(array.length / 2)]];
  }else{
    return []
  }
}

const eqArrays = function(actual, expected) {
  for (let i = 0; i < actual.length; i++) {
    if (actual[i] !== expected[i]) {
      return false;
    }
  } return true;
};

// TEST CODE
console.log(eqArrays([1, 2, 3], [1, 2, 3])); // => true
console.log(eqArrays([1, 2, 3], [3, 2, 1])); // => false

console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])); // => true
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])); // => false

console.log(middle([1,2]));
console.log(middle([]));
console.log(middle([1,2,3,4,5,6,7]));

// TEST CODE
eqArrays([1, 2, 3], [1, 2, 3]); // => true
eqArrays([1, 2, 3], [3, 2, 1]); // => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]); // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]); // => false