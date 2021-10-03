function findAll(n, k) {
let result = '1'.repeat(k);
let numbers = '123456789'
let total = result.split('').reduce((acc,cur) => Number(acc) + Number(cur))
let result1 = []
total 
if ( n  >=  total) {
    for (let i = k-1; i > -1 ; i--){
        result1[i] = n - i
        n -= result1[i]
        total = result1.reduce((acc,cur) => acc + cur)
        }

}
return result1
}
function generator (arr) {
    let res = []
     for (let i = arr.length -1; i > 0; i--) {
      i
    let now  = arr[i];
    let next = arr[i-1];
    let rest = arr.slice(0, next) 
    while (now > next) {
        res.push(String([rest + next + now]))
        now--
        next++
    } 
}
return res
}

console.log(generator(findAll(10, 3)))
 console.log(findAll(10, 3)) // [8, '118', '334'] );
   // console.log(findAll(27, 3)) //[1, '999', '999']);
   // console.log(findAll(84, 4)) // []);
   // console.log(findAll(35, 6)) // [123, '116999', '566666']) 

// 118 127 136 145 226 235 244 334