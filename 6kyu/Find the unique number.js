function findUniq(arr) {
    let sorted = arr.sort((a,b) => a -b )
    const sortedTwo = sorted[1]
    const result = sorted.filter((e) => e != sortedTwo)
    return Number(result)
  }