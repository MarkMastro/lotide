const middle=function(array){
 
  if(array.length % 2 === 0 && array.length>2){//even length array
    
    return [array[Math.floor(array.length / 2)-1],array[Math.floor(array.length / 2)]];
  }else if(array.length===0 ){
    return "no array passed";
  }else if(array.length !==0 && array.length>2){
    return [array[Math.floor(array.length / 2)]];
  }else{
    return []
  }
}

module.exports=middle;



