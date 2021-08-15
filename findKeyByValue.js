const findKeyByValue = function(obj,val) {
  for (let genre in obj) {
    if (obj[genre] === val) {
      return genre;
    }
  } return undefined;
};
module.exports = findKeyByValue;

