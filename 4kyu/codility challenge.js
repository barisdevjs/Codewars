
/* function arrayPacking (integers) {
    return integers.reduceRight((integers,b)=>integers*256+b);
}
console.log(arrayPacking([24, 85, 0])) */


// return if the string is unique based on ascıı chars
/* function hasUniqueChars(s) {
    const firstArr = s.split('').map((e) => e.charCodeAt())
    const reduced = [...new Set(firstArr)]
    function checker (a,b) {
     return   a.sort().toString() == b.sort().toString() 
    }
    return checker(reduced,firstArr)
   } */



// return the sum of all natural numbers which are divisible by 3 || 5
// below the number argument
/* function solution(number) {
  
    function range( number) {
        return Array.apply(0, Array(number ))
          .map((element, index) => index + 0);
      }
const arr = range(number)
return arr.filter((element) => element % 3 == 0 || element % 5 == 0).reduce((a, b) => a +b, 0)
} */