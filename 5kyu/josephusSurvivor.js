function josephusSurvivor(n,k){
    n = Array.from(Array(n).keys())
    const result = []
    let counter = 0
    let idx = 0
    while (n.length > 0) {
        idx = idx % n.length
        if ( ++counter === k) {
            result.push(n.splice(idx,1)[0])
            counter = 0
            idx--
        }
        idx++
    }
    return result.pop()
}

console.log(josephusSurvivor(7,3))