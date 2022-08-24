// Takes an array of numbers and returns the variance as a float.
// The array of numbers will always have at least one element in it.
const variance = function(numbers) {
const mean = numbers.reduce((a, b) => a + b) / numbers.length;
mean
const variance = numbers.reduce((a, b) => a + Math.pow(b - mean, 2), 0) / numbers.length;
return variance;
};

console.log(variance([8, 9, 10, 11, 12]));