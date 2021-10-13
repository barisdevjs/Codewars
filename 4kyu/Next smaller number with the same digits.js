function nextSmaller(n) {
const array = n.toString().split('').map((e) => Number(e));
const sorted = array.sort((a,b) => a-b)
const sortCheck = (arr1,arr2) => {
    return arr1.every((e,idx) =>  arr2[idx])
}
if ( sortCheck(sorted,array) == true ) { return -1}

let len = array.length
var targetidx = -1;
for (let i = len-1; i > 0; i--) {
    if ( array[i] > array[i-1]) {
        targetidx = i - 1 ;
        break;
    } 
}

if ( targetidx == -1) { return targetidx }
let left = array.splice(0,targetidx)
let old = [array[0]];
let newer = array.sort((a,b) => a -b ).filter((e) => e > old)[0];
left.push(newer)
let idx = array.indexOf(newer)
let right = array.splice(idx, 1)
right.sort((a,b) => b-a )
return Number(left.concat(array).join(''))
}
console.log(nextSmaller(2071))
//console.log(nextSmaller(135))
