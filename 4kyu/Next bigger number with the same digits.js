
function nextBigger(n){
  const array = n.toString().split('');
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
right.sort((a,b) => a -b )
 return Number(left.concat(array).join(''))
}
console.log(nextBigger(29144))
