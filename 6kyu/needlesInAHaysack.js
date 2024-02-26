
/* function search(haystack, needle, path = '', res = []) {  
    Object.entries(haystack).forEach(([key, value]) => {
      const newPath = path ? `${path}.${key}` : key
      if (typeof value === 'string' && value.includes(needle)) {
        res.push(newPath)
      } else if (value && typeof value === 'object') {
        search(value, needle, newPath, res)
      }
    })
    
    return res.sort((a,b) => a.localeCompare(b))
  } */

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
/* function search(haystack, needle, arr = [], path = []) {
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
} */

/* function search(haystack, needle,arr = [], path ='') {
  for ( let [key, value] of Object.entries(haystack) ) {
        const newPath = path ? `${path}.${key}` : key
        if (typeof value === 'string' && value.includes(needle)) {
          arr.push(newPath)
        } else if (value && typeof value === 'object') {
          search(value, needle, arr, newPath)
        }
  }
  return arr.sort((a,b) => a.localeCompare(b))
} */