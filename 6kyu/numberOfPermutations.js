function perms ( element) {
    if ( typeof element === 'number') {
        element = element.toString();
    }
    const set = [...new Set(Array.from(element))];
    if ( set.length === 1) {
        return 1
    }
    return factorial(element.length) / set.map(x => factorial(element.split(x).length - 1)).reduce((a, b) => a * b);
}

const factorial = function (n) {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
};

console.log(perms(66666));
console.log(perms(737));
console.log(perms( 23113242));
console.log(perms('abc'));