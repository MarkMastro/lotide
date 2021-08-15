const flatten = function(array) {
  let flattenedArray = [];
  array.forEach(element => {
   
    if (Array.isArray(element)) {
      
      element.forEach(ele=>{
        
        flattenedArray.push(ele);
      });
    } else {
      flattenedArray.push(element);
    }
  });
  return flattenedArray;
};
module.exports = flatten;