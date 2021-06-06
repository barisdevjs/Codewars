function digPow(n, p){
    const arr = n.toString().split('')
    var result2 = result / n;
    var result = 0;
    var resultP = p
    for (let i = 0; i < arr.length; i++) {
      result += Math.pow(arr[i], p)
       p += 1
        }
      return Number.isInteger(result / n) ? result/n : -1
    }