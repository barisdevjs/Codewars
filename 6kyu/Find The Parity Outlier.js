function findOutlier(integers){
    const odd = integers.filter((e) => Math.abs(e % 2) !== 0)
     const even = integers.filter((e) => Math.abs(e % 2) !== 1)
     return odd.length < even.length ? parseInt(odd.toString()) : parseInt(even.toString())
  }

  function findOutlier(integers){
    const evenNums = integers.filter(e => e % 2 === 0) 
    const oddNums = integers.filter(e => e % 2 !== 0) 
    return evenNums.length > oddNums.length ? oddNums[0] : evenNums[0]
  }