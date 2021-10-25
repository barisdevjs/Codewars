/* function removeZeros(array) {
    let temp;
    for(var i = array.length -1; i >= 0; i--){
      if(array[i] == 0 && array[i] !== false){
        for(var j = i; j < array.length - 1; j++){ 
          if(array[j+1] != 0 || array[j+1] === false){ 
            temp = array[j+1];
            array[j+1] = array[j];
            array[j] = temp;
          }
        }
      }
    }
    return array;
  }
console.log(removeZeros([7, 2, 3, 0, 4, 6, 0, 0, 13, 0, 78, 0, 0, 19, 14])) */
/* 
removeZeros = arr => arr['fi' + 'lter'](e => e !== 0 && e !== '0')['conc' + 'at'](arr['filt' + 'er'](e => e === 0 || e === '0'));
console.log(removeZeros([7, 2, 3, 0, 4, 6, 0, 0, 13, 0, 78, 0, 0, 19, 14])) */
function removeZeros(array) {
    const head = []
    const tail = []
    for (const e of array) {
      if (e === 0 || e === "0") {
        tail[tail.length] = e
      } else {
        head[head.length] = e
      }
    }
    return [...head, ...tail]
}
console.log(removeZeros([7, 2, 3, 0, 4, 6, 0, 0, 13, 0, 78, 0, 0, 19, 14])) 

/* 
function removeZeros(array) {
  return [...array[`filter`](v=>v!==0&&v!=='0'),...array[`filter`](v=>v===0||v==='0')]
}
*/
