// Given a string of letters a, b, n how many different ways can you make 
// the word "banana" by crossing out various letters and then reading left-to-right?
/* output b-anana--
b-anan--a
b-ana--na
b-an--ana
b-a--nana
b---anana
-banana--
-banan--a
-bana--na
-ban--ana
-ba--nana
-b--anana
*/



const solve = (input, target = 'banana') => {
    if (input === '' && target === '') return [''];
    if (input === '') return [];
  
    if (input[0] !== target[0]) {
      return solve(input.substring(1), target).map(x => '-' + x);
    }
    return [
      ...solve(input.substring(1), target.substring(1)).map(x => input[0] + x),
      ...solve(input.substring(1), target).map(x => '-' + x)
    ];

    }


console.log(solve('bbananana'));