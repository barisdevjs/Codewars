function smallest(n) {
    const s = [...''+n], smallest = [n,0,0]
    for (let i = 0; i < s.length; i++)
      for (let j = 0; j < s.length; j++) {
        if (i === j) j++
        const t = s.slice()
        t.splice(j,0,t.splice(i,1)[0])
        const m = +t.join``
        if (m < smallest[0]) 
          smallest.splice(0,3,m,i,j)
      }
    return smallest
  }

console.log(smallest(285365))
// [238565, 3, 1]
//console.log(smallest(269045))
// [26945, 3, 0]
