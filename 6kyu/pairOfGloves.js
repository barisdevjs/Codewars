function numberOfPairs(gloves) {
    var object = gloves.reduce(function (c, p) {
        c[p] = (c[p] || 0) + 1;
        return c;
    }, Object.create(null));
    let count = 0;
    for (const iterator in object) {
        // show numbers of gloves
        count += Math.floor(object[iterator] / 2)
    }
    return count

}

console.log(numberOfPairs(["red", "blue", "red", "blue", "red"]));