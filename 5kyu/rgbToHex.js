function rgb(r, g, b) {
    console.log([...arguments])
    return [...arguments].map(z => z > 0 && z < 256 ? z : z > 255 ?  255 : 0)
      .map(e => valToHex(e).padStart(2,'0')).join('')
}

function valToHex(v) {
    return v.toString(16).toUpperCase()
}

// console.log(rgb(255, 255, 255))
// console.log(rgb(0, 0, -20))
// console.log(rgb(300,255,255))