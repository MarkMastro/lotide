
const findKey = function(obj,callback) {
  let results = [];
  for (const key in obj) {
    if (callback(obj[key])) {
      return key
    } else {
      continue;
    }
  }
  return results;
};
module.exports = findKey;
 