function product(a,b){
    if ( a == b || a > b ) return 'Error'
    function range(start, end) {
        const converter = Array(end - start ).fill().map((_, idx) => start + idx).slice(1)
        return Array.isArray(converter) ? converter : 'Error'
      }
    let arr = range(a,b)
    let result = arr[0]
    for (let i = 1; i < arr.length; i++) {
        const element = arr[i];
        result *= element 
    }
   return  typeof result == 'number' ? result : 'Error'
  }
  // console.log(product(2,6))
  console.log(product(2,1))