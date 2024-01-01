// zeroOrOne = (n, s) =>
//   s[0].map((_, i) => s.map((a) => a[i]).sort()[(n / 2) | 0]);

function zeroOrOne(n, s) {
  const result = [];
  for (let i = 0; i < s[0].length; i++) {
    const count = s.map((arr) => arr[i]);
    const mostFrequent = count.filter((e) => e === 1).length > n / 2 ? 1 : 0;
    result.push(mostFrequent);
  }
  return result;
}

console.log(
  zeroOrOne(3, [
    [1, 0, 1, 0, 1],
    [1, 1, 1, 0, 1],
    [0, 1, 1, 1, 0],
  ])
);
