function persistence(num) {
    if (num < 10) return 0;
    let temp
    let count = 0;
    while (num > 9) {
        num = num.toString().split('');
        num
        num = num.reduce((a, b) => a * b);
        num
        temp = num;
        count++;
    }
    return count;
}
console.log(persistence(39));
console.log(persistence(999));
console.log(persistence(4));


