/* function anagrams(word, words) {
const checker = words.filter(e=>e.split('').sort().join('') ===
 word.split('').sort().join(''));
return checker
}  */

///////////////////////////////////

/* String.prototype.sort = function() {
  return this.split("").sort().join("");
};

function anagrams(word, words) {
  return words.filter(function(x) {
      return x.sort() === word.sort();
  });
}

console.log( anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']))
///////////////////////////////////

/* function anagrams(word, words) {
  var result = [];
  var test = word.split("").sort().join("");
  
 let map = words.filter((e) => e.split('').sort().join('') == test)
  return map;
}
console.log( anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer'])) */

///////////////////////////////////

function anagrams(word, words) {
  return words.filter(w => reorder(w) === reorder(word));
}
function reorder(word) {
  return word.split('').sort().join('');
}
console.log( anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer'])) 


///////////////////////////////////