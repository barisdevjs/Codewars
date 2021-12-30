function generateHashtag(str) {
    if  (!str.length) return false
    str = str.trim();
    const arr = str.split('' || ' ');
    let temp = []
    for (let item of arr) {
        if (typeof item === 'string' && item !== '') {
            temp.push(item[0].toUpperCase() + item.slice(1));
        }
    }
    temp = temp.join('');
    temp = '#' + temp;
    temp
    return ( temp.length > 140 || str === '' ) ? false : temp;
}

console.log(generateHashtag(" Hello there thanks for trying my Kata"));
console.log(generateHashtag("    Hello     World   "))
console.log(generateHashtag(""))

