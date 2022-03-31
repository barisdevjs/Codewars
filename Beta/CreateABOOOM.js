function boomIntensity(n) {
let str = "";
if ( n < 2 ) return 'boom';
const exclamations = '!'
if ( n > 2 ) {
    str = 'B' + 'o'.repeat(n) + 'm';
}

if ( n % 2 === 0 ) {
    str = str + exclamations;
}

if ( n %5 === 0 ) {
    str = str.toUpperCase() 
}

return str;
}

console.log(boomIntensity(5));