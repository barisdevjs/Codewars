const asciiZero = "0".charCodeAt(0);
function modulo(a,b) {
    // Initialize result
    let mod = 0;
    for (let i = 0; i < b.length; i++)
        mod = (mod * 10 + b.charCodeAt(i) - asciiZero) % a;
 
    return mod; 
}


const lastDigit = function (str1, str2) {
    const length1 = str1.length
    const length2 = str2.length
    if ( length1 === 1 && length2 === 1 && str2[0] === '0' && str1[0] === '0' ) {
        return 1
    }

    if ( length2 == 1 && str2[0] === '0' ) {
        return 1
    }

    if ( length1 == 1 && str1[0] === '0' ) {
        return 0
    }

    const exp = (modulo(4, str2) === 0) ? 4 : modulo(4, str2);
    const res = Math.pow(str1[length1 -1].charCodeAt(0) - asciiZero, exp);
    return res % 10
}   
console.log(lastDigit('3715290469715693021198967285016729344580685479654510946723', '68819615221552997273737174557165657483427362207517952651'))



