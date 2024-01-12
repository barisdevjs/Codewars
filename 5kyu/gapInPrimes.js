function gap(gap, start, end) {
    //cut off odd gaps
    //bitwise AND can test least significant bit
    //odd numbers have 1, even have 0
    if (gap & 1) { //is it odd?
      if (start > 2 || end < gap + 2) return null; //check if 2 is in range
      return isPrime(gap + 2) ? [2, gap + 2] : null; //check additionally the other part
    }
    var previous = null; //no initial value
    //loop over odd numbers to check for primes
    for (var current = start | 1; //set last bit to 1: /odd numbers stay same, even numbers become next odd
         current <= end;
         current += 2 // skip any even number
        ) {
      if (isPrime(current)) {
        if (current - previous === gap) //is it a match?
          return [previous, current];
        //no need for "else" here as the other branch has "return"
        previous = current; // anyway, save it
      }
    }
  
    return null; //no early return from loop = nothing matches
  
    
    /**
      Tests if n is prime
    */
    function isPrime(n) {
      if (n <= 6) //cut away small primes explicitly
        return n === 2 || n === 3 || n === 5;
      //cut away small divisors (2 and 3) explicitly
      if (n & 1 === 0 || //using bitwise AND for even numbers
          n % 3 === 0) return false;
      
      var limit = Math.floor(Math.sqrt(n)); //precalculate loop limit
      // loop is checking every divisor using 6k ± 1 pattern
      for (var t = 5; //start with 5, first 6k - 1 number
           t <= limit;
           t += 6 //step by 6
          ) {
        if (n % t === 0 || //6k - 1
            n % (t + 2) === 0) //6k + 1
          return false;
      }
      return true;
    }
  }
console.log(gap(6,100,110));
console.log(gap(2,100,110));
console.log(gap(4,100,110));