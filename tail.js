const assertArraysEqual=require('./assertArraysEqual')

const tail=function(array){
  let arrTail=array.slice(1);
  console.log(arrTail)
  return arrTail
}
module.exports=tail;


