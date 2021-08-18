
const findKey = function(obj,callback) {
 
  for (const key in obj) {
    if (callback(obj[key])) {
      return key
    } else {
      continue;
    }
  }
  return undefined;
};
module.exports = findKey;
 