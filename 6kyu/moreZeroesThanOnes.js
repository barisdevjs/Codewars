function moreZeros(s){
  const arr = [...new Set(s.split(''))]
  .map(e => e.charCodeAt(0)).map(e => e.toString(2))
  .map(e => e.split('').map(e => Number(e)))
    const res =  arr.map(e => e.reduce((acc ,curr) => {
       if ( !acc[curr] ) acc[curr] = 0
        acc[curr]++;
        return acc;
  }, {}))
   res
//    const map = res.map(e => Object.values(e[0] > Object.values(e[1]) ? e : e[1] ))
/*   for (let index = 0; index < res.length; index++) {
    const element = res[index];
    element
    for (const key in element) {
      console.log(element[key])
    }
  } */
  const map = []

  res.map((val , idx ,arr) => {
    const key = arr[idx]
    const valueArr = Object.values(val)
    for (let index = 0; index < valueArr.length; index+= 2) {
        const element = valueArr[index];
        const secElement = valueArr[index+1]
        if ( element > secElement ) {
            map.push(true)
        } else {
            map.push(false)
        }
    }
  })
  const final = []
  map.forEach((val, idx) => {
    if ( val === true ) {
        final.push(s[idx])
    }
  })
  return final

}

console.log(moreZeros('DIGESTe'))