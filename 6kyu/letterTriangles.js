const triangle = (str) => {
    if (str.length == 1) return str
    const abc = ' abcdefghijklmnopqrstuvwxyz'
    let myStr = ''
    for (let i = 0; i < str.length - 1; i++){
        let index1 = abc.indexOf(str[i])
        let index2 = abc.indexOf(str[i + 1])
        let index3 = index1 + index2
        if (index3 > 26) index3 -= 26
        myStr += abc[index3]
    }
    return triangle(myStr)
}

console.log(triangle('zz'))
