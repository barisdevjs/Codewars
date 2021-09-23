/* const solequa = (num) => {
    const res = [];
    let a, b;
    for(let a = 1; a <= Math.sqrt(num); a++){
       if(Number.isInteger(b = num/a)){
          if(Number.isInteger(x = (b+a)/2)){
             if(Number.isInteger(y = (b-a)/4)){
                res.push([x, y]);
             };
          };
       };
    };
    res
    return res;
 };
 console.log(solequa(4)) */

/*  const solequa = (n) => {
   const res = [];
   for (let x =n; x > 0; x--) {
      let y = Math.sqrt((Math.pow(x,2) - n) / 4)
      if ( Number.isInteger(y)) {
         res.push([x,y])
      }
   }
   return res
}
console.log(solequa(13)) */