/* function removeNb(n) {
    let num = 0
    let res = 0
    const result = []
    do {
        res += num
        num++;
    } while (num <= n);
    const array = Array.from(Array(n), (_, i) => i+1)

    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        for (let idx = 0; idx < array.length; idx++) {
            const secElement = array[idx];
            if ( secElement === element ) { continue }
            if ( element * secElement === res - ( element + secElement) ) {
                result.push([element, secElement])
            }
        }
    }
    return result
    // this commented solution can't pass the performance tests
} */

function removeNb(n) {
    const results = [];
    for (let a = 1; a <= n; a++) {
      let b = ((n * (n + 1)) / 2 - a) / (a + 1);
      if (Number.isInteger(b) && b <= n) results.push([a, b]);
    }
    return results;
  }

console.log(removeNb(5006))
