function solution(numbers) {
    if (numbers.includes(1)) { return numbers.length}

    if(equalNums(numbers)){
        return numbers.reduce(function(a,b){
          return a + b;
          });
        } else {
          const sorted =numbers.map((a,b) => a-b)
          

          
          
        }

}
	


function equalNums(numbers){
return numbers.reduce(function(a, b){ return (a === b) ? a : NaN; });
}

		

console.log(solution([6,9,21]))