function SeriesSum(n) {
    if (n == 0) { return '0.00' }
    if (n == 1) { return '1.00' }
    let arr = [1]
    const z = 3
    let h = 4
    while (n > 1) {
        arr.push((1 / h))
        n--;
        h+= 3
    }
    return arr.reduce((a,b) => a +b).toFixed(2)
}

console.log(SeriesSum(4))