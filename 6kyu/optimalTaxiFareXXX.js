function calculateOptimalFare(D, T, V1, R, V2) { // can't pass the last tests
  V1 = V1/60;
  V2 = V2/60;
  if ( V2 * T > D) return "0.00"
  if ( V1 * T < D) return "Won't make it!"
  if ( V1 * T === D) return (60*V1*R).toFixed(2)
  let x = 0;
  do {
    x++;
  } while (D != (V1 * ( T-x)) + ( V2 * x));
  return ((T-x)* V1 * R / (V1-V2)).toFixed(2);
}

function calculateOptimalFare(d, t, v1, r, v2) {
  var h = t / 60, walk = v2 * h;
  if (walk >= d) { return "0.00";            }
  if (v1*h <  d) { return 'Won\'t make it!'; }
  return (r * v1 * (d - walk) / (v1 - v2)).toFixed(2);
};

  // console.log(calculateOptimalFare(8, 10, 90, 2, 6)) 
  // console.log(calculateOptimalFare(6, 120, 90, 1, 6))
  // console.log(calculateOptimalFare(90, 60, 90, 1, 6))
  // console.log(calculateOptimalFare(100, 60, 100, 5, 6))
  console.log(calculateOptimalFare(49, 95, 71, 19, 11))

