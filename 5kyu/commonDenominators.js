function convertFrac(lst){
    const max = lst.flat(Infinity).reduce(lcm)
    return lst.map(val => {
        const subMax = Math.max(...val)
        val.map(elem => {
            elem
            elem =( max / subMax) * elem 
        })
    })
}

function gcd (a,b){
    return a ?  gcd(b % a, a) : b
}

function lcm (a,b){
    return ( a * b) / gcd(a, b)
}


console.log(convertFrac([ [1, 2], [1, 3], [1, 4] ]))