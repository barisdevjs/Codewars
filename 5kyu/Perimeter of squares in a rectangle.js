const perimeter1 = function (n) 
{
  if (n===1) 
  {
    return [0, 1];
  } 
  else 
  {
    var s = perimeter1(n - 1);
    s.push(s[s.length - 1] + s[s.length - 2]);
  
  }
  return s
}

function perimeter(n){ return perimeter1(n+1).reduce((acc,sum) => acc + sum , 0) *4 }


console.log(perimeter(7))