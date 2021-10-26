function findReverseNumber(n) {
    let str,first2,result;
  
    if (n <= 10) {
      return n - 1    
    }
    if (n < 20) {
      return (n - 10) * 11
    }
    str = String(n)
    first2 = str.slice(0,2)
    if (+first2 >= 11 && +first2 < 20) {
      first2 = String(+first2 - 10)
      str = first2 + str.slice(2)
      result = str + str.split('').reverse().join('')
    } 
    else if (+first2 == 10){
      first2 = '9'
      str = first2 + str.slice(2)
      result = str + str.slice(0,-1).split('').reverse().join('')
    } else {
      first2 = String(+first2 - 10)
      str = first2 + str.slice(2)
      result = str + str.slice(0,-1).split('').reverse().join('')
    }
    return BigInt(result)
}