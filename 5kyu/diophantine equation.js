const solequa = (num) => {
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

 console.log(solequa(4))