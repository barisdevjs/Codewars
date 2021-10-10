/* function encode(dictionary, word) {
let result = [];
if ( typeof dictionary != 'string' ) { dictionary = dictionary.join('');}
if ( typeof word != 'string' ) { word = word.join('')}

for (let i = 0; i < word.length; i++) {
    const element = word[i];
    const res = dictionary.indexOf(element)
    result.push(res)
    if ( res == 0) { dictionary = dictionary} else {
    dictionary = dictionary[res] + dictionary.slice(0,res) 
    }
}
return result
}
console.log(encode("abc", "cccbbb"))
console.log(encode("abc", "ababab")) */

/* function decode(dictionary , result) {
const type = typeof dictionary;
let word = '';
for (let i = 0; i < result.length; i++) {
    const idx = result[i];
    word += dictionary[idx];
    if ( idx == 0) { dictionary = dictionary} else {
        dictionary = dictionary[idx] + dictionary.slice(0,idx)
    }
}

return  type == 'string' ? word : word.split('')
}
console.log(decode( "abc", [0,1,1,1,1,1]))
console.log(decode( [0,1,2], [0,1,1,1,1,1])) */



