function duplicateEncode(word){
    return word.toLowerCase().split('').map((e,index,arr) => {
      return  arr.indexOf(e) === arr.lastIndexOf(e) ? e = '(' : ')'
    }).join('')
   }