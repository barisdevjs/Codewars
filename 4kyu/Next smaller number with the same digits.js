function nextSmaller(n) {
    const d = n.toString().split(''); 
    let i1 = 0;     
    let tmp;      
    let flag = false;   
    for (let i = 0; i < d.length - 1; i++) {
      if (d[i]>d[i+1]) {
        i1 = i;
        flag = true;
      }
    }
    if (flag == false) return -1;
    for (var i = d.length - 1; i > 0; i--) {
      if (i == i1) i--;
      if (d[i]<d[i1]) {
        tmp   = d[i];
        d[i]  = d[i1];
        d[i1] = tmp;
        break;
      }
    }
    if (d[0] == 0) return -1
    return parseInt(d.slice(0,i1+1).concat(d.slice(i1+1).sort((a,b) => b-a)).join(''))
  }

// console.log(nextSmaller(2071))
console.log(nextSmaller(1027))
// console.log(nextSmaller(1234567908))
