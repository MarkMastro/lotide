const words = ["ground", "control", "to", "major", "tom"];

const map=function(array,funct){
  newArray=[]
  for(let item of array){
    newArray.push(funct(item));
  }
return newArray;

}

const results1 = map(words, word => word[0]);
console.log(results1);