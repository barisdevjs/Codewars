function expression(number, operation){
    if(!operation)
      return number;
    return Math.floor(operation(number));
  }
  
  function zero(operation) { return expression(0, operation); }
  function one(operation) { return expression(1, operation); }
  function two(operation) { return expression(2, operation); }
  function three(operation) { return expression(3, operation); }
  function four(operation) { return expression(4, operation); }
  function five(operation) { return expression(5, operation); }
  function six(operation) { return expression(6, operation); }
  function seven(operation) { return expression(7, operation); }
  function eight(operation) { return expression(8, operation); }
  function nine(operation) { return expression(9, operation); }
  
  function plus(x) {
    return function(y) {
      return y + x;
    }
  }
  function minus(x) {
    return function(y) {
      return y - x;
    }
  }
  function times(x) {
    return function(y) {
      return y * x;
    }
  }
  function dividedBy(x) {
    return function(y) {
      return y / x;
    }
  }