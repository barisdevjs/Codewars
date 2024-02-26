function perfectSquare(string){
    const arr = string.split('\n')
    if (arr.some((e)=> e.includes(','))) return false
    const arrlen = arr.length
    const map = arr.map(x => new Set(x.split(''))).map(x => x.size)
    const set = new Set(map).size
    return arr.every((e) => e.length  == arrlen && set == 1)
}

// console.log(perfectSquare("..\n.."))
// console.log(perfectSquare("..\n..\n.."))
// console.log(perfectSquare("...\n,..\n..."))
console.log(perfectSquare(",,,\n,,,\n,,,"))