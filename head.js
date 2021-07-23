const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected} `);
  }
  console.assert(actual === expected,  ` 🛑🛑🛑 ${actual} !== ${expected} `);
};

// TEST CODE
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");

function head(arr){
  return arr[0]
}