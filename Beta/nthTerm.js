function nthTermOf(sequence) {
  const d = sequence[1] - sequence[0];
  const a = sequence[0];
  return `${d}n + ${a - d}`;
}

console.log(nthTermOf([3, 5, 7, 9, 11]))
console.log(nthTermOf([-6, -11, -16, -21, -26]))