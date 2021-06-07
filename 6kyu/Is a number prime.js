function isPrime(p) {
    if ( p < 2) {return false}
  const s =  Math.sqrt(p)
  var isPrm = true;
  for (let i = 2; i <= s; i++) {
    if ( p % i == 0) {
      isPrm = false;
      break;
    }
  }
  return isPrm
  }