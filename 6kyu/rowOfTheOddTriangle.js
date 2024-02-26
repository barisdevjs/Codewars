function result(number,n) {
    this.start = number
    const step = 2
    const result = []
    for (let i = 0; i < n; i++) {
        result.push(start + step * i)
    }
    return result
}
function oddRow(n) {
  
    let  first = 1
    let i = 1
    let res = 0
    if ( n == 1) return [1]
    while ( n >= i) {
      first = first + i *2
        i++
        if (n === i) {
            res = first
        }
    }
    return result(res, n)
  }