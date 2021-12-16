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
                                      ? `${acc} * ${curr}` 
                                      : `${acc} * ${curr}^${dividers[curr]}`
                                      , ``);
  return res.substring(3)
}