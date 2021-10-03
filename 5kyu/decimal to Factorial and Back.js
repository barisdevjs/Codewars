function dec2FactString(nb) {   // will be solved
    const legend = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    let str = '0';
    let i = 2;
    while(nb){
       str = legend[nb%i] + str;
       nb = Math.floor(nb / i);
       i++;
    };
    return str; 
    }
console.log(dec2FactString( 1504746))

function factString2Dec(str) {
const arr = str.split('').reverse()
let result = 0
arr
function factorial(n){
    //base case
    if(n == 0 || n == 1){
        return 1;
    //recursive case
    }else{
        return n * factorial(n-1);
    }
}

for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    result += Number(arr[i]) * factorial(i)
}
 return result 
}
console.log(factString2Dec('3999999999'))