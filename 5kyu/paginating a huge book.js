function pageDigits(n) {

 let realNum = Number(n)
    var number_of_digits = 0;
    for(var i = 1; i <= realNum; i *= 10)
        number_of_digits += (realNum - i + 1);
 
    return  number_of_digits
 } 


console.log(pageDigits(400000000000000000n))