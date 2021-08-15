const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
   
    if (sentence[i] === ' ') {
      //skip
    } else if (results[sentence[i]] === undefined) {
      
      results[sentence[i]] = [];
      results[sentence[i]].push(i);
    } else {
      results[sentence[i]].push(i);
    }
  }
  // logic to update results here
  return results;
};
module.exports = letterPositions;
