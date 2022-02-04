function computeRanges(arr, op, ranges) {
  return ranges.map((el) =>
    arr.slice(el[0], el[1]).reduce((acc, el) => op(acc, el))
  );
}

const arr = [7, 2, 1, 9];
const sum = (a, b) => a + b;
const ranges = [
  [2, 3],
  [2, 4],
  [3, 4],
  [3, 4]
];
  console.log(computeRanges(arr, sum, ranges));
