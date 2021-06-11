function findMissingLetter(array) {
    const numbered =  array.map((e => e.charCodeAt()))
    const missingminus1 =  numbered.filter((e,i,arr) =>   e + 2 === arr[i+1] )
    return String.fromCharCode( Number(missingminus1) + 1)
    }