
const findKey = function(obj,callback) {
  let results = [];
  for (const key in obj) {
    if (callback(obj[key])) {
      results.push(key);
    } else {
      continue;
    }
  }
  console.log(results);
  return results;
};
module.exports = findKey;
 