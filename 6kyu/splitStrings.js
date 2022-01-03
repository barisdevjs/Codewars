function solution(str) {
    if ( str === '') return []
    let temp = []
    for (let i = 0; i < str.length; i += 2) {
        const part = str.slice(i, i + 2)
        temp.push(part)
    }
    let last = temp.pop()
    if (last.length === 1) {
        last = last + '_'
        temp.push(last)
    } else {
        temp.push(last)
    }

    return temp
}

console.log(solution('abcdef'))
console.log(solution('abcdefg'))
console.log(solution(''))