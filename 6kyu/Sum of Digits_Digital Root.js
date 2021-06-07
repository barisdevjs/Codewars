function digital_root(n) {
    if ( n ===0) return n
   const arr =n.toString().split('').map((e) => Number(e)).reduce((acc,val) => acc+val, 0)
 const result = arr % 9
 return result === 0 ? 9 : result
   }