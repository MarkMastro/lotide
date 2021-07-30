const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected} `);
  }
  console.assert(actual === expected,  ` 🛑🛑🛑 ${actual} !== ${expected} `);
};
const eqArrays = function(actual, expected) {
  for (let i = 0; i < actual.length; i++) {
    if (actual[i] !== expected[i]) {
      return false;
    }
  } return true;
};

const countOnly = function(allItems,itemsToCount) {
  const result = {};

  for (let item in itemsToCount) {
    let count = 0;
    if (itemsToCount[item] === true) {
      console.log(item,itemsToCount[item]);
      for (let countItem in allItems) {
        console.log(allItems[countItem],item);
        if (allItems[countItem] === item) {
          console.log('counted');
          count++;
        }
      }
      if (count > 0) {
        result[item] = count;
      }
    }
  }

  return result;
};


// TEST CODE
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

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
console.log(result1);
assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);