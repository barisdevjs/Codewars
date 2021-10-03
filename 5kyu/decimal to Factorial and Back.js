function dec2FactString(nb) {
function recursive(number,divider,resultInside) {
let number = nb
let divider = 1
let remainder = number % divider
let resultArr = []
    resultInside = Math.floor(number / divider)
    if ( resultInside < 1) break
    recursive(number ,divider) {
        resultArr.push(resultInside)
    }
    return resultArr
}
return resultArr
}
console.log(dec2FactString(463))


/* function factString2Dec(str) {
	// your code
	return 1;
} */