function buddy(start,limit) {
    const s = (n) => {
      let res = 0;
      for(let i = 2; i <= Math.sqrt(n); i++)
        if(n % i === 0) i === n/i ? res+= i : res += i + n/i
      return res
    }
    
    for(let i=start; i<= limit; i++) {
      let si = s(i)
      if(i < si && i === s(si)) return [i,si]
    }
    return "Nothing";
  }

  console.log(buddy(10,50))
  console.log(buddy(48,50))
