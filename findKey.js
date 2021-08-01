
const findKey=function(obj,callback){
  let results=[];
  for (const key in obj) {
    if(callback(obj[key])){
      results.push(key);
    }else{
      continue;
    }
  }
  console.log(results)
  return results
}

 

findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2) // => "noma"