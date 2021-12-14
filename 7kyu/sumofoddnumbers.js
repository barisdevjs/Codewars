// write a function creates a sum of all the odd numbers from 1 to n in fibonacci sequence
function sumOfOddNumbers(n) {
let starter = 1
let multpler = 1
for (let index = 1; index <= n; index++) {
    const element = index;
     multpler = element**2 - index +1
    starter = element + multpler  
    multpler
}
return multpler * (n+1) -1
}

    console.log(sumOfOddNumbers(42));

