function convertFrac(lst){
    const cd = lst.reduce((a, [_, d]) => lcm(d, a), 1);
    return lst.map(([n, d]) => `(${(n * cd) / d},${cd})`).join("");
}

function gcd (a,b){
    return a ?  gcd(b % a, a) : b
}

function lcm (a,b){
    return ( a * b) / gcd(a, b)
}
// console.log(convertFrac([ [1, 2], [1, 3], [1, 4] ]))
console.log(convertFrac([ [ 69, 130 ], [ 87, 1310 ], [ 3, 4 ] ]))