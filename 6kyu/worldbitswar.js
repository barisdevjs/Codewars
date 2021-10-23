function bitsWar(numbers) {
const posodds = numbers.filter((e) => e % 2 != 0 && e >= 0);
const posevens = numbers.filter((e) => e % 2 == 0 && e >= 0);
const negodds = numbers.filter((e) => e % 2 != 0 && e < 0).map((e) => Math.abs(e));
const negevens = numbers.filter((e) => e % 2 == 0 && e < 0).map((e) => Math.abs(e));

function dec2bin(dec) {
    const reggex = /(1)+/g;
    const str = dec.map((e) => (e >>> 0).toString(2)).filter((e) => e.includes('1'));
     const len = str.map((e) => e.match(/(1)/g).length)
     const result =len.reduce((a, b) => a + b, 0);
     return result 
}
dec2bin(posevens)
const even = dec2bin(posevens) - dec2bin(negevens); 
const odd = dec2bin(posodds) - dec2bin(negodds); 
return even > odd ? 'evens win' : odd > even ? 'odds win' : 'tie'
}
console.log(bitsWar([13,-5,-2,0,-13,3,-8,2]))