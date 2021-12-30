function sumDigPow(a, b) {
    let eureka = [];
    for (i = a; i <= b; i++) {
        digits = String(i).split('');
        if (i == digits.reduce(function (accumulator, currentValue, currentIndex) {
            return accumulator + currentValue ** (currentIndex + 1);
        }, 0)) {
            eureka.push(i);
        }
    }
    return eureka;
}


console.log(sumDigPow(304, 2845));
console.log(sumDigPow(1, 100));
