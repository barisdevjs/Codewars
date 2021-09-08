/* function encode(text) {
let arr = text.split('')
arr = arr.map((e) => e.charCodeAt()) 
function ascii_to_hex(array) {
 return array.map((e) => e.toString(2).padStart(8,'0'))
   }
arr = ascii_to_hex(arr).join('')
arr = String(arr).split('')
arr = arr.map((e) => e + e + e)
arr = arr.join('')
return arr;
}
console.log(encode('hey')) */



function decode(bits) {
const length = bits.length
let threeGroups = []
for (let index = 0; index < length; index+= 3) {
  const iterator = bits.substring(index, index+3)
  threeGroups.push(iterator)
}
function counter(bit) {
  const result = []
  bit.forEach(element => {
    let numArr = element.split('')
    numArr = numArr.map((e) => Number(e))
    const zeros = numArr.filter((e) => e == 0).length
    const ones = 3 - zeros
    result.push( zeros > ones ? 0 : 1)
  });
  return result
}
let correctedBits = counter(threeGroups)
function bitsToString(array) {
  let strArr = []
  let str = ''
  for (let index = 0;  str.length < array.length ; index++) {
    str += array[index];
    if (str.length == 8)  { strArr.push(str)  , str = '' }
  }
    return strArr.map((e) => parseInt(e,2))
}
const strVersion = bitsToString(correctedBits)
strVersion
return strVersion.map((e) => String.fromCharCode(e)).join('')
}
console.log(decode("100111111000111001000010000111111000000111001111000111110110111000010111"))