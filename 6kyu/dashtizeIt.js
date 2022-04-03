/* function dashatize(num) {
    // check if number is Nan 
    if (isNaN(num)) { return "NaN"; }
    num = Math.abs(num);
    const str = String(num);
    let arr = str.split('').map(el => Number(el));
    const newArr = []
    arr.forEach(el => {
        if (el % 2 === 0) {
            newArr.push(el)
        } else {
            newArr.push('-')
            newArr.push(el)
            newArr.push('-')
        }
    })
   return  newArr.join('')
   .replace(/--/gi, '-')
   .replace(/^-/gi, '')
   .replace(/-$/gi, '')
     
} */

function dashatize(num) {
    return String(num)
      .replace(/([13579])/g, "-$1-")
      .replace(/--+/g, "-")
      .replace(/(^-|-$)/g, "")
  }

// console.log(dashatize(-274));
console.log(dashatize(974302));
console.log(dashatize(5311));