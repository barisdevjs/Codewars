/* function allSquaredPairs(num) {
let i = 0;
let k = num;
function squarter(x) {return Math.sqrt(x) }

let result = []
while ( Math.floor(k) >= Math.floor(i)) {
     result.push([squarter(i),squarter(k)]) 
    i++  
    k-- 
}

return result.filter((e) => e.every((k) => Number.isInteger(k)))
} */


/* function allSquaredPairs(n) {
    let result = []
    for (i = 1; i * i <= n; i++)
    for (j = 1; j * j <= n; j++)
    if (i * i + j * j == n) {
        if ( i > j) { break}
        result.push([i,j])
    }
    return result;
} */

function allSquaredPairs(num) {
    var pairs = [];
    for (var i = 0; i <= Math.sqrt(num/2); i++) {
      var j = Math.sqrt(num-i*i);
      if (j % 1 == 0) {
        pairs.push([i, j]);
      }
    }
    return pairs;
  }

console.log(allSquaredPairs(325))