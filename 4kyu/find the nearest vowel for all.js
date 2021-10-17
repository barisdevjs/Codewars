const find = (s) => {
if ( s.length == 0) return []
const array = s.toLowerCase().split('')
let vowelsIdx = []
for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if ('aeiou'.includes(element)) {
        vowelsIdx.push(Number(i))
    }
}
let result = []
const arrayIdx = array.map((e,i) => e = Number(i))
arrayIdx
for (let i = 0; i < arrayIdx.length; i++) {
    const element = arrayIdx[i];
    let temp = []
    for (let j = 0; j < vowelsIdx.length; j++) {
        const secElement = vowelsIdx[j];
        temp.push(Math.abs(secElement - element))
        console.log(temp)
    }
temp
 result.push(Math.min(...temp))
 
 temp = []
}
return result
}

console.log(find('Shopper'))
console.log(find("aaaaa" ))
console.log(find("abcdabcd"))
console.log(find("bcdfghjklmno"))
