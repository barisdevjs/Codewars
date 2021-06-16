function highAndLow(numbers){
  const newarr = numbers.split(' ').sort((a,b) => b - a )
  return newarr[0].concat(' ').concat( newarr[newarr.length -1]).toString(  )
}