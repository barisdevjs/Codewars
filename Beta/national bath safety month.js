function bath(string, bath){
let stringLength = string.length;
let bathLength = bath.length -2
return stringLength > bathLength ? true : false;
}

console.log(bath('qVkgP', '|~~~|'))
console.log(bath('gGRHDZAKjRCpjxftXxnHvVcFs', '|~~~~~~~~~~~~~~~~~~~~~~~~~~~|'))
