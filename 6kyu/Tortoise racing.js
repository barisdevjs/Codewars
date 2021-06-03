function race(v1, v2, g) {
    if ( v1 > v2 ) return null
   const result = parseFloat(1 / ((v2 -v1) / g))  
   var decimalTimeString = result
   var n = new Date(0,0);
   n.setSeconds(+decimalTimeString * 60 * 60);
  return n.toTimeString().slice(0, 8).split(':').map((e) => Number(e));
  }