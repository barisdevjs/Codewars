function orderBreaker(arr) {
    for(let i=0;i<arr.length;i++){
      const [a,v,b] = [arr[i-1],arr[i],arr[i+1]];
      if( !a && v>b || !b && a>v || a<=b && (a>v||v>b) )
        return v;
    }
  }
    console.log(orderBreaker([19,27,33,34,112,578,116,170,800]))