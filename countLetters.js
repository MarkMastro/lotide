
const countLetters = function(sentence) {
  let counter = {};
  for (let letter of sentence) {
    if (letter === ' ') {
      //skip
    } else if (counter[letter] >= 1) {
      counter[letter] = counter[letter] + 1;
    } else {
      counter[letter] = 1;
    }
  }
  return counter;
};

module.exports = countLetters;
//test code
console.log(countLetters("lighthouse in the house"));