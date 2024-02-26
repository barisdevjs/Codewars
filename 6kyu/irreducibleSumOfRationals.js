const gcd = (a, b) => b ? gcd(b, a % b) : a;

const sumFracts = l => {
  if (!l.length) return null;
  const [n, d] = l.reduce(([a, x], [b, y]) => [a*y + b*x, x*y]);
  const g = gcd(n, d);
  return g === d ? n / d : [n / g, d / g];
}