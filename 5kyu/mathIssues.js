Math.round = function(number) {
    return number +0.5 | 0
  };
  
  Math.ceil = function(number) {
    return Number.isInteger(number) ? number : number+1 |0
  };
  
  Math.floor = function(number) {
    return Math.trunc(number);
  };