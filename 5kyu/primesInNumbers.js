function prime(n){
const primes = [];
for (let i = 2; i <= n; i++) {
    if (n % i === 0) {
        primes.push(i);
        n /= i;
        i--;
    }
}
}

const primeFactors = (n) => {
    const factors = [];
    let divisor = 2;
    while (n > 2) {
        if (n % divisor === 0) {
            factors.push(divisor);
            n /= divisor;
        } else {
            divisor++;
        }
    }
    factors
    let res =''

    const map = new Map();
    for (let i = 0; i < factors.length; i++) {
        if (map.has(factors[i])) {
            map.set(factors[i], map.get(factors[i]) + 1);
        } else {
            map.set(factors[i], 1);
        }
    }
    for (let [key, value] of map) {
        if ( value > 1) {
        res += `(${key}**${value})`
        } else {
        res += `(${key})`
        }
    }
    return res
}

console.log(primeFactors(86240)); // []