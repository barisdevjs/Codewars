function find(n){
let arr = [0,1,2,2];
function increment(seq) {
    let counter = seq[seq.length-1]
    const num  = counter 
    while ( counter > 0 ) {
    seq.push(num + 1)
    counter--
}
}
while (n > arr[arr.length-1]) {
    increment(arr)
}
return arr
}
console.log(find(6))
// [0, 1, 2, 2, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6, 6,
//  7, 7, 7, 7, 8, 8, 8, 8, 9, 9, 9, 9, 9, 10, 10, 10, 10, 10, 11, 11, 11, 11, 11, 12, 12, 12, 12, 12, 12, 13, 13, 13, 13, 13, 13, 14, 14, 14, 14, 14, 14, 15, 15, 15, 15, 15, 15, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 17, 17, 17, 18, 18, 18, 18, 18, 18, 18, 19, 19, 19, 19, 19, 19, 19, 20, 20, 20, 20, 20, 20, 20, 20, 21, 21, 21, 21, 21, 21, 21, 21]