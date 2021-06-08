function findEvenIndex(arr){
    var len = arr.length
    if ( len == 2 && arr[0] > arr[1] ) return 0
    for (let i = 0; i <= arr.length; i++) {
      var result = 0;
     let left =  arr.slice(0, i).reduce((acc,sum) => acc + sum , 0)
     let right = arr.slice(i-1,len).reduce((acc,sum) => acc + sum , 0)
     if (left == right) {
       result += i;
       break
     }
     
    }
    if ( result != -1) { 
      return result - 1
    } else {
      return result + 1
    }
    }   