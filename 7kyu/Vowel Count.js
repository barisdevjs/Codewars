function getCount(str) {
    var vowelsCount = str.match(/[aeiou]/gi)
     return vowelsCount === null ? 0 : vowelsCount.length;
 }
