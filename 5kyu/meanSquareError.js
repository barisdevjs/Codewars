function solution(firstArray, secondArray) {
  let a = 0;
  firstArray.forEach((e, i) => (a += helper(e, secondArray[i])));
  return a / firstArray.length;
}

function helper(a, b) {
  let res = 0;
  switch ((a, b)) {
    case a < 0:
      res = (b - a) ** 2;
    case b < 0:
      res = (a - b) ** 2;
    default:
      res = Math.abs(a - b) ** 2;
  }
  return res;
}

console.log(solution([1, 2, 3], [4, 5, 6]));
// console.log(solution([10, 20, 10, 2], [10, 25, 5, -2]))
