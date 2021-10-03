function toRange(arr) {
if ( !arr.length  ) { return '' } ;
if ( arr.length == 1 ) { return String(arr) } ;

arr = [...new Set(arr)].sort((a,b) => a-b)
let result = ''
result += arr[0]
for (let i = 0; i < arr.length ; i++) {
    const element = arr[i];
    const secElement = arr[i+1]
    const thirdElement = arr[i+2]
    if ( element +1 == secElement && result[result.length-1] != '_') {
        result += '_'
    }

    if ( element +1 == secElement && secElement +1 < thirdElement ) {
        result += secElement
    }

    if ( element +1 != secElement && secElement != arr[arr.length-1]) {
        result +=','
        result += secElement
    }

    if ( element +1 != secElement && secElement == arr[arr.length - 1]) {
        result += ','
        result += secElement
        break
    }


    if ( secElement == arr[arr.length-1] && result[result.length-1] == '_') {
        result += secElement
        break
    }
}
return result
} 
console.log(toRange([3,4,5,6,9]))
console.log(toRange([3,4,5,6]))
console.log(toRange([3,5,6,9]))
 console.log(toRange([1, 2, 3, 5, 6, 7]))
 console.log(toRange([5,6,7,8,9]))
 console.log(toRange([]))
 console.log(toRange([1]))



// Should return an array
function toArray(str) {
    for(var arr=str.split(","),i=0,r=[];str!=""&&i<arr.length;i++){
      var [a,b]=(arr[i]+"_"+arr[i]).split("_")
      for(var j=+a;j<=+b;j++) r.push(j)
    }
    return r
  }
console.log(toArray('3_6,9'))
console.log(toArray(''))
console.log(toArray('1'))
console.log(toArray('1_5'))
console.log(toArray('1_3,5_7'))
