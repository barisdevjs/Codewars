function expandedForm(num) {
    let str = num.toString();
    let arr = [];
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== '0') {
        arr.push(str[i] + '0'.repeat(str.length - i - 1));
        }
    }
    return arr.join(' + ');
}
console.log(expandedForm(70304))

  // expandedForm(70304), '70000 + 300 + 4'