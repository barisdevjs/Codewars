function sumPairs(ints, s) {
    let lastNumber
    for (let i = 0; i < ints.length; i++) {
      if (lastNumber && lastNumber === ints[i]) continue
      lastNumber = ints[i]
      const sliced = ints.slice(0, i)
      const sumIndex = sliced.indexOf(s - ints[i])
      if (sumIndex !== -1) return [sliced[sumIndex], ints[i]]
    }
  }
  console.log(sumPairs([1, -2, 3, 0, -6, 1], -6))