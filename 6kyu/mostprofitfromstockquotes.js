function getMostProfitFromStockQuotes(quotes) {
    let ans = 0;
    while (quotes.length != 0) {
        let max = Math.max(...quotes), n = quotes.lastIndexOf(max);
        ans = quotes.slice(0, n).reduce((pv, cv) => pv += max - cv, ans);
        ans
        quotes = quotes.slice(n + 1);
    }
    return ans;
}

// console.log(getMostProfitFromStockQuotes([ 1, 2, 10, 3, 2, 7, 3, 2]));
// console.log(getMostProfitFromStockQuotes([ 7, 3, 2]));
console.log(getMostProfitFromStockQuotes([ 1,2,3,4,5,6]));
// console.log(getMostProfitFromStockQuotes([7,8,10,5,6,1]));
