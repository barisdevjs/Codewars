/* function encode(dictionary, word) {   /// solve again for large inputs
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


/* var encode = function (dict,word) {
    var init = {wordAsNumbers: [], charList: dict.split('')};
   
    return word.split('').reduce(function (acc, char) {
      var charNum = acc.charList.indexOf(char); //get index of char
      acc.wordAsNumbers.push(charNum); //add original index to acc
      acc.charList.unshift(acc.charList.splice(charNum, 1)[0]); //put at beginning of list
      return acc;
    }, init).wordAsNumbers; //return number list
  };
  
  console.log(encode("abc", "cccbbb"))
  console.log(encode("abc", "ababab")) */


