function maxSum(arr, ranges) {
    let max = null;
    let sums = [];
    let sofar = 0;
    for (let i = 0; i <= arr.length; i++) {
      sums[i] = sofar;
      sofar += arr[i];
    }
  
    for (let i = 0; i < ranges.length; i++) {
      let sum = sums[ranges[i][1]+1] - sums[ranges[i][0]];
      if (max === null || sum > max) {
        max = sum;
      }
    }
    return max;
  }


console.log(maxSum([1, -2, 3, 4, -5, -4, 3, 2, 1], [[1, 3], [0, 4], [6, 8]]))