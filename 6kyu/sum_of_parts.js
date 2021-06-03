function partsSums(ls) {
    ls.unshift(0);  // we added the '0' manually to the solution   
    let sum = ls.reduce((acc, cur) => acc + cur, 0);
    return ls.map(val => sum = sum - val); 
}