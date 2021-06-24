function sumPairs(ints, s) {
    let result = [];
    for (let i = 0; i < ints.length; i++) {
        const element = ints[i];
        for (let j = i+1; j < ints.length ; j++) {
            const innerElement = ints[j];
            if ( element + innerElement == s ) {
                result.push([element,innerElement, [i,j]])
                
            }
        }
        
    }
    let indices = result.map((e) => {Math.abs(e[2][0] - e[2][1]), e.slice(0,2)})
    indices 
  return indices;
 /*    return  indices[1][0] < indices[0][0] ? indices[1][1] :
    indices[1][0] > indices[0][0] ? indices[0][1] : undefined
    return ( result.length > 1) ? result : undefined */
    
}
    

  console.log(sumPairs([1, 4, 8, 7, 3, 15], 8))