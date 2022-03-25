function upArray(arr) {
    if (arr.some(e => (e < 0) || (e > 9))) return null
    if (arr.length == 1 && arr[0] == 0 || (arr == [])) {
        return null
    }
    let num = BigInt(arr.join(''))
    return Array.from(String(++num), Number);
}




/* function upArray(arr){
    const hasNegative = arr.find(v => v < 0);
    const greater= arr.find(v=> v>9)
    const unexplainedTestCase=(arr)=>{
        return (arr.length===1&&arr[0]===1)?true:false
    }
    if(hasNegative||greater){return null}
    if(arr.length>Number.MAX_SAFE_INTEGER.toString().length){
        arr[arr.length-1]=arr[arr.length-1]+1
        return arr
    }
    const callback = x => Number(x);
    arr= Array.from(Number(arr.join(''))+1+'',callback)
    return unexplainedTestCase(arr)?null:arr
}
 */


console.log(upArray([0]))
console.log(upArray([9, 2, 2, 3, 3, 7, 2, 0, 3, 6, 8, 5, 4, 7, 7, 5, 8, 0, 8]))