function josephus(items,k){
    const result = []
    let counter = 0
    let idx = 0
    while (items.length > 0) {
        idx = idx % items.length
        if ( ++counter === k) {
            result.push(items.splice(idx,1)[0])
            items
            counter = 0
            idx--
        }
        idx++
    }
    return result
}



console.log(josephus([1,2,3,4,5,6,7],3))