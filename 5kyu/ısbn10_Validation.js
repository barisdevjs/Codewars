function validISBN10(isbn) {
 const arr = (isbn.split('')).map((e) => e == 'X'  ? e = 10 : e)
 let check = true
for (let i = 0; i < isbn.length - 1; i++) {
    const element = isbn[i];
    if ( isNaN(parseFloat(element))) {
        check = false;
    }
}
if ( check == false) {return false}
if ( isbn.length != 10 ) { return false }
 let result = []
 for (let index = 0; index < arr.length; index++) {
     const element = arr[index];
     const multiplier = index +1
     result.push((element * multiplier))
 }
return result.reduce((acc,sum) => acc + sum) % 11 == 0 ? true : false && check
}
console.log(validISBN10("1234512345"))
console.log(validISBN10('X123456788'))