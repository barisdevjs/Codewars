function hammingDistance(a, b) {
    arrayA = dec2bin(a)
    arrayB = dec2bin(b)
    const len = arrayA.length > arrayB.length ? arrayA.length : arrayB.length
    arrayA = arrayA.padStart(len, '0').split('')
    arrayB = arrayB.padStart(len, '0').split('')
    return arrayA.filter((e, idx) => e !== arrayB[idx]).length
}

function dec2bin(dec) {
    return dec.toString(2)
}

console.log(hammingDistance(25, 87))