
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
module.exports = countOnly;

