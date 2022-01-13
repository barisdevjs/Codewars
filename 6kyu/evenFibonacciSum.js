function fibonacci(n) {
    if (n < 2)
        return 0;

    let ef1 = 0, ef2 = 2;
    let sum = ef1 + ef2;

    while (ef2 <= n) {
        let ef3 = 4 * ef2 + ef1;

        if (ef3 > n)
            break;

        ef1 = ef2;
        ef2 = ef3;
        sum += ef2;
    }

    return sum;
}
console.log(fibonacci(8));