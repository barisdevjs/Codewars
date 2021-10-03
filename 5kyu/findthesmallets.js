function smallest(n) {
let arr = String(n).split('').map((e) => Number(e));
let max =  Math.max(...arr)
let min =  Math.min(...arr)
const idxMax = arr.indexOf(max)
const idxMin = arr.indexOf(min)
if ( min == 0) { arr.splice(idxMin,1)
return [Number(arr.join('')), 0, idxMin] 
}
// CANT SOLVE
let result = []
if ( arr[0] === min ) {
    const realMin = arr.splice(0,1)
    arr
    for (let i = 0; i < arr.length; i++) {
        const leftMin = Math.min(...arr)
        const idxMin = arr.indexOf(leftMin)
        var willReplaced = arr.splice(idxMin,1)
        willReplaced
        arr.unshift(willReplaced)
        arr = arr.flat(Infinity)
        break   
    }
     arr = realMin.concat(arr)
    return [Number(arr.join('')), Number(willReplaced) +1  , 1]
}
for (let i = 0; i < idxMin; i++) {
    let element = arr[i];
    if ( element > min) {
        arr.splice(idxMin,1)
        arr.unshift(min)
        result.push(Number(arr.join('')), idxMin, i)
        break
    }
}
return result
}
console.log(smallest(1000000))
// [239687, 4, 1]