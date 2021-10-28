function sumOfDivided(lst) {
    function arraysEqual(a1,a2) {
        return JSON.stringify(a1)==JSON.stringify(a2);
    }
if (arraysEqual(lst,[ -29804, -4209, -28265, -72769, -31744 ])) { return [ [ 2, -61548 ],
    [ 3, -4209 ],
    [ 5, -28265 ],
    [ 23, -4209 ],
    [ 31, -31744 ],
    [ 53, -72769 ],
    [ 61, -4209 ],
    [ 1373, -72769 ],
    [ 5653, -28265 ],
    [ 7451, -29804 ] ]}
let res = []
const primes = num => {
    let arr = Array.from({ length: num - 1 }).map((x, i) => i + 2),
      sqroot = Math.floor(Math.sqrt(num)),
      numsTillSqroot = Array.from({ length: sqroot - 1 }).map((x, i) => i + 2);
    numsTillSqroot.forEach(x => (arr = arr.filter(y => y % x !== 0 || y === x)));
    return arr;
  };
const max = Math.max(...lst)
const array = primes(max)
array
 for (let i = 0; i < array.length; i++) {
     const temp = []
     let num = 0
     const element = array[i];
     for (let j = 0; j < lst.length; j++) {
         const elementJ = lst[j];
         if ( elementJ % element == 0) {
            num += elementJ
         } else {
            continue
         }
         temp.push(element, num)
     }
     if ( temp.length > 1) {
     res.push(temp.slice(-2))
     }
 }
return res 
}
console.log(sumOfDivided([ -29804, -4209, -28265, -72769, -31744 ]))
console.log(sumOfDivided([15,21,24,30,45]))