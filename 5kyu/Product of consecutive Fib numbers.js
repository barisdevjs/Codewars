function productFib(prod) {
    const memo = [];
    let a = 0;
    let b = 1;
    let c = a + b;
    while (c * b <= prod) {
        if (prod / c === b) {
            return [b, c, true];
        }
        a = b;
        b = c;
        c = a + b;
    }
    return [b, c, false];

}
console.log(productFib(4895))
productFib(4895); // [55, 89, true]