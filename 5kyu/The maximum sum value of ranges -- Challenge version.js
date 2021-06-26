function maxSum(arr,range){
 let result = [];
 for (const iterator of range) {
     iterator
  const array = arr.slice(iterator[0], 1+ iterator[1]);
  result.push(array);
 }
    
 let res1 = result.map((e) => e.reduce((acc,val) => acc + val, 0))  
 return res1.sort((a,b) => b - a)[0]; 
  }
// passes simple tests but in huge arrays it consumes memory ???
  console.log(maxSum([1,-2,3,4,-5,-4,3,2,1],[[1,3],[0,4],[6,8]]))