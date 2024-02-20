function stickyCalc (operation, val1, val2){
    val1 = Math.round(val1);
    val2 = Math.round(val2);
    const num = String(val1) + String(val2);
    switch (operation) {
        case '+':
            return Math.round(Number(num) + Number(val2));
        case '-':
            return Math.round(Number(num) - Number(val2));
        case '*':
            return Math.round(Number(num) * Number(val2));
        case '/':
            return Math.round(Number(num) / Number(val2));
        default:
            return 'Invalid operation';
    }
}

console.log(stickyCalc('/', 433, 930));