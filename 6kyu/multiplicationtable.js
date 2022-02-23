/* const multiplicationTable = function(size) {
if ( size === 1 ) return  [ [ 1 ] ]
let result = []
let arr = []
if (size > 1) { 
    for (let index = 0; index < size; index++) {
        const element = index + 1
        arr.push(element)
    }
  }
  
for (let i = 0; i < size; i++) {
    const element = i + 1
    result.push(arr.map((e) => e * element))
}
return result
} */

/* multiplicationTable = function(size) {

    return Array.apply(null, new Array(size)).map(function(val, i) {
      return Array.apply(null, new Array(size)).map(function(val, j) {
        return (i+1) * (j+1);
      });
    });
  } */

// console.log(multiplicationTable(4))

/* multiplicationTable = function(size) {
  return  Array.from({length: size}, (c,z) => Array.from({length: size}, (e, i) => (z +1) * (i + 1)));
 } */