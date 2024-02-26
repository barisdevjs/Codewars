function replaceZero(arr) {
  const zeroMap = new Map();
  let maxNonZero = 0;
  let maxCount = 0;
  let lastZeroIndex = -1;

  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    if (num !== 0) {
      if (zeroMap.has(num)) {
        zeroMap.set(num, zeroMap.get(num) + 1);
      } else {
        zeroMap.set(num, 1);
      }

      if (zeroMap.get(num) > maxCount) {
        maxCount = zeroMap.get(num);
        maxNonZero = num;
      }
    } else {
      lastZeroIndex = i;
    }
  }

  let replaced = false;
  const result = arr.map((num, index) => {
    if (num === 0 && index === lastZeroIndex && !replaced) {
      replaced = true;
      return maxNonZero;
    } else {
      return num;
    }
  });

  console.log(result);

  return lastZeroIndex;
}

// console.log(
//   replaceZero([1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 1, 1]),
//   10
// );

// console.log(replaceZero([1, 1, 0, 1, 1, 0, 1, 1]), 5);

// console.log(replaceZero([1, 1, 1, 0, 1, 1, 0, 1, 1, 1]), 6);

// console.log(replaceZero([0, 1, 1, 1]), 0);

// console.log(replaceZero([1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 1]), 10);
console.log(replaceZero([0, 1, 0, 0, 0, 0]), 2);
