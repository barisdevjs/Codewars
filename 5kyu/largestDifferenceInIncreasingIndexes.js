var largestDifference = function (data) {
  // find the max index difference in the data array
  let maxDiff = 0;
  for (let i = 0; i < data.length; i++) {
    for (let j = i + 1; j < data.length; j++) {
      if (data[j] >= data[i] && j - i >= maxDiff) {
        maxDiff = j - i;
        j;
        i;
      }
    }
  }
  return maxDiff;
};

console.log(largestDifference([9, 4, 1, 10, 3, 4, 0, -1, -2]));
