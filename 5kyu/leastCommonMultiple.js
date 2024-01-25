var lcm = function () {
    const arr = Array.from(arguments)
    arr
    if (arr.length == 1) return arr[0]
    return arr.reduce(lcma)
};

const gcd = (a, b) => a ? gcd(b % a, a) : b;

const lcma = (a, b) => a * b / gcd(a, b);

console.log(lcm(9));
console.log(lcm(2,5));
console.log(lcm(2, 3, 4));