function longestConsec(strarr, k) {
    if ( k<0 || k > strarr.length) return ''
    let currentLongest = '';
    let finalResult = '';
    for (let index = 0; index < strarr.length; index++) {
        const element = strarr.slice(index, index + k).join('');
        element
        if (element.length > currentLongest.length ) {
            currentLongest = element;
        }
    }
    return currentLongest;
}

console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2));