function search(haystack, needle, arr = [], path = []) {
    for (let key in haystack) {
        const keyOne = haystack[key]
        if (typeof keyOne === 'string' && keyOne.indexOf(needle) !== -1) {
            arr.push(path.join`.` + '.' + key)
        }
        else if (typeof keyOne === 'object' ) {
            search(keyOne, needle, arr, path.concat(key))
        }
    }
    return arr.map(e => e.startsWith('.') ? e.slice(1) : e).sort()
}



const obj = {
    site: "Codewars",
    description: "Lorem ipsum dolor sit...",
    obj2: {
        str: "Yeah, Codewars!",
        num: 123,
        obj3: {
            something: "Ph'nglui mglw'nafh Codewars R'lyeh wgah'nagl fhtagn. Gotha fm'latgh h'gof'nn, geb chtenff"
        }
    }
};

console.log(search(obj, 'Codewars'))