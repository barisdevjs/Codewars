function pickPeaks(arr) {
    let output = {pos: [], peaks: []};
    
    if(arr.length === 0)
      return output;
    
    let topPeak = arr[0];
    let topPos = 0;
    
    for(let i=1; i<arr.length; i++){
      
      if(arr[i] > arr[i-1]) { // keep climbing
        topPeak = arr[i];
        topPos = i;
        
      } else if(arr[i] == arr[i-1]) { 
          continue;
      } else if(arr[i] < arr[i-1]) {
        if(topPos > 0) {
          output.pos.push(topPos);
          output.peaks.push(topPeak);
          topPos = 0;
        } 
      } else {
        continue;
      }
    }
    
    return output;
  }
// console.log(pickPeaks([3,2,3,6,4,1,2,3,2,1,2,2,2,1]));
console.log(pickPeaks([1,2,3,6,4,1,2,3,2,1]));
// console.log(pickPeaks([1,2,5 ,4,3,2,3,6 ,4,1,2,3,3,4,5 ,3,2,1,2,3,5,5,4,3]));
// {pos:[2,7,14,20], peaks:[5,6,5,5]}