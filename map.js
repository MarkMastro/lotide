const map = function(array,funct) {
  let newArray = [];
  for (let item of array) {
    newArray.push(funct(item));
  }
  return newArray;

};
module.exports = map;