function stockList(listOfArt, listOfCat) {

  let res = ''

  let count = 0
  for (key of listOfCat) {
    const filtered = listOfArt.filter((e) => e.startsWith(key))
    filtered
    if (filtered.length == []) {
      count++
    } {
      const total = filtered.map((e) => e.split(' ')).map((e) => Number(e[1])).reduce((a, b) => a + b, 0)
      total
      res += `(${key} : ${total}) - `
    }
  }
  res
  count
  if (count == listOfCat.length) {
    return ''
  } else {
    return res.slice(0, -3)
  }
}

console.log(stockList(["CBART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"],
["A", "B", "C", "W"]))
console.log(stockList(["CBART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"],
  ["E", "F", "G", "W"]))