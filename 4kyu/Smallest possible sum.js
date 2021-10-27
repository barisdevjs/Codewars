function gcd (a, b) {
  if(b == 0){
      return a;
  }
  return gcd(b, a%b);
}
function gcd_more_than_two_numbers (a) {
return a.reduce(gcd)
}

function solution(numbers) {
  let solution =  numbers.length
  const gccc = gcd_more_than_two_numbers(numbers);
  if ( gccc > 1) { solution = numbers.length * gccc }
    if (numbers.includes(1)) { return numbers.length}
    if(equalNums(numbers)){
        return numbers.reduce(function(a,b){
          return a + b;
          });
        } 
        return solution
}
	
function equalNums(numbers){
return numbers.reduce(function(a, b){ return (a === b) ? a : NaN; });
}

		

console.log(solution([6,9,21]))