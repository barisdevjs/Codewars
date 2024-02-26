function lastDigit(as) {
  return (
    as.reduceRight(function (pow, base) {
      return pow === 0
        ? 1
        : +pow == 1
        ? base
        : Math.pow(base % 100, (+pow % 4) + 4);
    }, 1) % 10
  );
}

console.log(lastDigit([3, 4, 5]), 1);
// console.log(lastDigit([4,3,6]    ), 4);
// console.log(lastDigit([7,6,21]   ), 1);
// console.log(lastDigit([12,30,21] ), 6)
