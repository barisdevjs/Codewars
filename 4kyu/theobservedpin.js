function getPINs(observed) {
    const adjacent = {
        '1': ['1', '2', '4'],
        '2': ['2', '1', '3', '5'],
        '3': ['3', '2', '6'],
        '4': ['4', '1', '5', '7'],
        '5': ['5', '2', '4', '6', '8'],
        '6': ['6', '3', '5', '9'],
        '7': ['7', '4', '8'],
        '8': ['8', '5', '7', '9', '0'],
        '9': ['9', '6', '8'],
        '0': ['0', '8'],
    };
	if (!observed || observed.length === 0) return [];
	if (observed.length === 1) return adjacent[observed[0]];
	const newCombos = [];
	const firstDigits = observed.slice(0, observed.length - 1);
    firstDigits
	const lastDigit = observed[observed.length - 1];
    lastDigit

	getPINs(firstDigits).forEach(oldCombo => {
		adjacent[lastDigit].forEach(newDigit => {
			newCombos.push(oldCombo + newDigit);
		});
	});

	return newCombos;
}
console.log(getPINs('197'))

/* const adj = [[0,8],
           [1,2,4],
           [2,1,3,5],
           [3,2,6],
           [4,1,5,7],
           [5,2,4,6,8],
           [6,3,5,9],
           [7,4,8],
           [8,0,5,7,9],
           [9,6,8]];
const getPINs = observed => adj[observed[0]]
  .map(x => observed.length == 1 ? [x.toString()] : getPINs(observed.slice(1)).map(y => x + y))
   .reduce((x,y) => x.concat(y));

console.log(getPINs('19')) */

/* function getPINs(observed) {
    //  return [observed].concat(getPINsHelper(observed));
    //  return getPINsHelper(observed);
      let adjacentPins = {
        '1': ['1','2','4'],
        '2': ['1','2','3','5'],
        '3': ['2','3','6'],
        '4': ['1','4','5','7'],
        '5': ['2','4','5','6','8'],
        '6': ['3','5','6','9'],
        '7': ['4','7','8'],
        '8': ['5','7','8','9','0'],
        '9': ['6','8','9'],
        '0': ['0', '8']
      };
      
      if (observed.length === 1) {
        return adjacentPins[observed];
      } 
      
      let allPins = [];
      let subPins = getPINs(observed.substring(1));
      subPins
      adjacentPins[observed[0]].forEach((p) => {
        allPins = allPins.concat(subPins.reduce((acc, sp) => {
            acc.push(p + sp);
            return acc;
        }, []));
      });
      return allPins;  
    }
    console.log(getPINs('197')) */


  
  
