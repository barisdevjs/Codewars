/* function findReverseNumber(n) {
    if ((n-=10)<10) return n>0 ? n*11 : n+9;
    let $ = new Leap(2);
    while (n >= $.skipped) n -= $.skipped, $ = new Leap($.digits + 1);
    if (n-- && !($.digits % 2)) return (1*10**($.digits/2-1)+n).getPalindrome();
    return (1*10**(($.digits-1)/2-1)+Math.floor(n/10)).getPalindrome(n%10);
    };
    
    Number.prototype.getPalindrome = function(_='', half=''+this, middle=''+_){
    return half + middle + [...half].reverse().join``;
    };
    
    class Leap {
    constructor(d){
    this.digits = d;
    this.skipped = 9*10**~~((d-1)/2);
    };
    };
console.log(findReverseNumber(25)) */

function findReverseNumber(n) {
    let str,first2,result;
  
    if (n <= 10) {
      return n - 1    
    }
    if (n < 20) {
      return (n - 10) * 11
    }
    str = String(n)
    first2 = str.slice(0,2)
    if (+first2 >= 11 && +first2 < 20) {
      first2 = String(+first2 - 10)
      str = first2 + str.slice(2)
      result = str + str.split('').reverse().join('')
    } 
    else if (+first2 == 10){
      first2 = '9'
      str = first2 + str.slice(2)
      result = str + str.slice(0,-1).split('').reverse().join('')
    } else  {
      first2 = String(+first2 - 10)
      str = first2 + str.slice(2)
      result = str + str.slice(0,-1).split('').reverse().join('')
    }
    return result
}
console.log(findReverseNumber(108))