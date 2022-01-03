function high(x){
 x = x.split(' ');
  let max = 0;
  let maxWord = '';
  for(let i = 0; i < x.length; i++){
    let sum = 0;
    for(let j = 0; j < x[i].length; j++){
      sum += x[i].charCodeAt(j) - 96;
    }
    if(sum > max){
      max = sum;
      maxWord = x[i];
    }
  }
  return maxWord;
}

console.log(high('man i need a taxi up to ubud'));
// taxi