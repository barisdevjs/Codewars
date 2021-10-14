function nextSmaller(n) {
const array = n.toString().split('').map((e) => Number(e));
array
const sorted =[... array].sort((a,b) => a-b).map((e) => Number(e));
sorted
const sortCheck = (arr1,arr2) => {
    return arr1.every((e,idx) => arr1[idx] == arr2[idx])
}
const len = array.length
if ( sortCheck(sorted,array) == true  ) { return -1 }
if ( sortCheck(sorted,array) == false && len == 2 ) { return  Number(array.reverse().join(''))}

for (let i = array.length-1; i >= 0; i--) {
    const lastElement = array[i];
    const frontLastElement = array[i-1]
    const thrid = array[i-2]
    if ( lastElement < frontLastElement && lastElement != 0 ) {
        array.fill(lastElement,i-1,i)
        array.fill(frontLastElement,i)
        return Number(array.join(''))
    } else if (lastElement < frontLastElement && lastElement == 0 ) {
        array.unshift(array[i+1])
        array.pop()
        array
    }
}
return Number(array.join(''))
}
// console.log(nextSmaller(2071))
console.log(nextSmaller(1027))
console.log(nextSmaller(1234567908))
