function fibonacci(n) {
    if ( n < 1) { return [] } 
  var fibonArr = [0,1]
  for (let i = 1; i < n-1; i++) {
    fibonArr.push(fibonArr[i] + fibonArr[i-1])
  }
  return fibonArr
  }