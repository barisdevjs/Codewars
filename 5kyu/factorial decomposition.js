/* function decomp(n) {
    const factorial = (n) => {
        let result = 0;
        if (n == 0) return 1;
        result += n * factorial(n-1)
        return result
    }
    function isPrime(num) {
        for ( var i = 2; i < num; i++ ) {
            if ( num % i === 0 ) {
                return false;
            }
        }
        return true;
    }
    const primeArray = (factorialRes) => {
        var arr = [2];
        for ( var i = 3; i < factorialRes; i+=2 ) {
            if ( isPrime(i) ) {
                arr.push(i);
            }
        }
      return arr
    }
      console.log(primeArray(factorial(n)))     
    var arrayRes = primeArray(factorial(n));
    let exponents = (factResult) => { 
    let finalResult = [];
    let multiplier = 0
    for (let i = 0; i < arrayRes.length; i++) {
        const element = arrayRes[i];
        while (factResult % element === 0) {
            multiplier++;
            factResult /= element;
            factResult
            multiplier 
            if ( factResult % element !== 0) {
            finalResult.push(`${element}^${multiplier}`);
            multiplier = 0;
            }
        }
    }

    return finalResult;

}
    let realBigResult = exponents(factorial(n)).join('*');
    const regex = '^1'
    realBigResult
    return realBigResult.replaceAll(regex, '')
} */

const decomp = number => {

    // function that adds the dividers of a number to a "dividers object"
    const subdecomp = (number, subdividers) => {
      let remainder = number
  
      // from 2 to square root of the number
      for (x = 2; x <= Math.sqrt(number); x++) {
        // check if it can divide the number
        if (remainder % x === 0) {
          // add it as a key to a results object
          if (!subdividers[x]) subdividers[x] = 0;
          // while it can be a divisor, add +1 to the key and update number
          while (remainder % x === 0) {
            subdividers[x]++;
            remainder = remainder / x;
          }
        }
      }
      // if after all there's still a remaining number, it is a divisor too
      if (remainder > 1) {
        if (!subdividers[remainder]) subdividers[remainder] = 1;
        else subdividers[remainder] += 1;
      }
      return subdividers;
    }
  
    // initial dividers: none!
    let dividers = {}
  
    // calculate the dividers for each number used in the factorial
    for (let x = 2; x <= number; x++)
      dividers = subdecomp(x, dividers);
  
    // generate a html string with the result
    let res = Object.keys(dividers).reduce((acc, curr) => dividers[curr] === 1 
                                        ? `${acc} * ${curr} ` 
                                        : `${acc} * ${curr}^${dividers[curr]}`
                                        , ``);
    return res.substring(2)
  }

 console.log(decomp(17))
//console.log(decomp(7))
/* console.log(decomp(22))
console.log(decomp(14))
console.log(decomp(25)) */