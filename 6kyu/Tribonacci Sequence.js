function tribonacci(signature,n){
    if (n === 0 ) {
      return []
    }
    if (n === 1) {
      return [signature[0]]
    }
    if ( n === 2) {
      return [signature[0], signature[1]]
    }
    let arr = [].concat(signature)
   for (var i = 2; i < n -1; i++) {
     let newitem = arr[i] + arr[i-1] + arr[i-2]
     arr.push(newitem)
     } 
   return arr
  }