function incrementString(str) {
    let result = [];
    let temp = '';
    for (let i = str.length-1; i > -1; i--) {
        if (!isNaN(str[i])) {
            const a = temp
            temp = str[i] +a 
        } else {
            var b = str.substring(i+1,-1) 
            break;
        }
    }
    temp =( Number(temp) + 1).toString().padStart(temp.length, '0');
    result.push(b,temp);
    return result.join('');
}


console.log(incrementString('fo99obar015'))
console.log(incrementString('foo999'))
console.log(incrementString('foo'))
