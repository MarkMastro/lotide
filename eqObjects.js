const eqArrays = require('./eqArrays');

const eqObjects = function(object1, object2) {

  if (Object.keys(object1).length === Object.keys(object2).length) {
    for (let key in object1) {
    
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        
        if (eqArrays(object1[key],object2[key])) {
          
          continue;
        } else {
          return false;
        }
      } else if (object1[key] === object2[key]) {
        continue;
      }
      return false;
      
    } return true;
  } else {
    return false;
  }
  
};

module.exports = eqObjects;




