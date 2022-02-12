
bonus = function(arr, s) {
const len = arr.length;
const total = arr.reduce((a, b) => a + b);
const filtered = arr.filter( x => x );
filtered
const divider = filtered.reduce((a, b) => a * b, 1);
divider
let temp = []
const res = [];
for (const iterator of filtered) {
    iterator
    const xx = divider / iterator;
    temp.push(xx)
      }
      let temp2 = 0;
for (const iterator of temp) {
        temp2 += iterator;
        }
        for (const iterator of temp) {
            res.push(Math.round((iterator / temp2) * s))
            }
        
    return res;
  }

console.log(bonus([18, 15, 12], 851)); //  [230, 276, 345]
console.log(bonus([4,2,1,0], 1200));  

//  console.log(bonus([8,14,11], 23541)); // [10241, 5852, 7448]
