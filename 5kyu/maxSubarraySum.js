function maxSequence(arr) {
    let maxSum = 0;
    let partialSum = 0;
  
    for (let item of arr) { 
      partialSum += item;
      partialSum
      maxSum = Math.max(maxSum, partialSum); 
      if (partialSum < 0) partialSum = 0; 
      maxSum
    }
    return maxSum;
  }

  console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]));