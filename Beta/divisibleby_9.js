function divBy9(ns){
    const res = ns.split('').map((e) => Number(e)).reduce((a,b) => (a + b) % 9,0 )
    return res <1 ? true : false
    }