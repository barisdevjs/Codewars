function woodCut(woods, n, maxDivider =  0) {
    const total = woods.reduce((a, b) => a + b);
    if ( total < n) 0
    if ( total === n) 1

    maxDivider = Math.floor(total / n);
    maxDivider 

    for (let i = maxDivider; i > 0; i--) {
        let sum = 0;
        for (let j = 0; j < woods.length; j++) {
            sum += Math.floor(woods[j] / i);
        }
        if (sum >= n) {
            return i;
        } else {
            maxDivider--
        }
    }
    return maxDivider
}
        
// output woodCut([232, 124, 456], 7) === 114
// output woodCut([232, 124, 456], 20) === 38
// output woodCut([232, 124, 456], 1) === 456
// output woodCut([232, 124, 456], 2) === 232
// output woodCut([232, 124, 456], 3) === 228
// console.log(woodCut([232, 124, 456], 20));

console.log(woodCut([232, 124, 456], 7));
// console.log(woodCut([232, 124, 456], 20));
// console.log(woodCut([232, 124, 456], 1));


