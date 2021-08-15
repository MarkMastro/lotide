const takeUntil = function(array,callback) {
  let results = [];
  for (const index of array) {
    if (!callback(index)) {
      results.push(index);
    } else {
      return results;
    }
  }
  return results;
};

module.exports = takeUntil;

