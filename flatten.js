const flatten = function(array) {
  flattenedArray = [];
  array.forEach(element => {
   
    if (Array.isArray(element)){
      
      element.forEach(ele=>{
        
        flattenedArray.push(ele);
      });
    } else {
      flattenedArray.push(element)
    }
  });
  return flattenedArray;
};

console.log(flatten([1, 2, [3, 4], 5, [6]]))