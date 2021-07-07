function multiply(a, b)
{
  function converter(x) {
    return BigInt(x)
  }
  return String(converter(a) * converter(b))
}
console.log(multiply("1020303004875647366210", "2774537626200857473632627613"))