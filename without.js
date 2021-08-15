const without = function(source,exclude) {
  let excluded = [];
  let flagEleNotFound = true;
  source.forEach(element => {
    for (let i = 0; i < exclude.length; i++) {
      if (element === exclude[i]) {
        flagEleNotFound = false;
        break;
      } else {
        flagEleNotFound = true;
        
      }
    }
    if (flagEleNotFound) {
      excluded.push(element);
    }
  });
  return excluded;
};
module.exports = without;
