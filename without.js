const without=function(source,exclude){
  excluded = [];
  flagEleNotFound=true;
  source.forEach(element => {
    for (let i = 0; i < exclude.length; i++) {
      if (element === exclude[i]){
        flagEleNotFound=false;
        break;
      }else{
        flagEleNotFound=true;
        
      }
    };
    if(flagEleNotFound){
      excluded.push(element)
    }
  });
  return excluded;
};


console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3","2"])) // => ["1", "2",]