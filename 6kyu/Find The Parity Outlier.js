function findOutlier(integers){
    const odd = integers.filter((e) => Math.abs(e % 2) !== 0)
     const even = integers.filter((e) => Math.abs(e % 2) !== 1)
     return odd.length < even.length ? parseInt(odd.toString()) : parseInt(even.toString())
  }