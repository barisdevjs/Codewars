function sumOfSquares(n) {
  let j = Math.sqrt(n);
  if (j * j === n) return 1;

  for (let i = 1; i * i <= n; i++) {
    j = Math.sqrt(n - i * i);
    if (j * j === n - i * i) return 2;
  }

  while (n % 4 === 0) {
    n /= 4;
    if (n % 8 === 7) return 4;
    return 3;
  }
}

console.log(sumOfSquares(24));
// → 2

// DOES NOT PASS BIGGER TESTS
function sumOfSquares2(n) {
  if (n <= 3) return n;

  let res = n;
  for (let x = 1; x <= n; x++) {
    let temp = x * x;

    if (temp > n) break;
    else res = Math.min(res, 1 + sumOfSquares(n - temp));
  }
  return res;
}
