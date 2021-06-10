var uniqueInOrder = function(iterable){
    let arr = iterable
    if (typeof iterable == 'string') {
      arr =  iterable.split('')
    } 
    for (let i = 0; i < arr.length;) {
      if (arr[i] == arr[i+1]) {
        arr.splice(i+1,1)
      } else {
        i++
      }
    }
    return arr
  }