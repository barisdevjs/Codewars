function sortTwisted37(array) {
    const MAPPING = { 7: 3, 3: 7 };
    return array.slice().sort((a, b) => twist(a) - twist(b));
    function twist(number) {
        return parseInt(number.toString().replace(/[37]/g, a => MAPPING[a]));
    }
}



console.log(sortTwisted37([1, 2, 3, 4, 5, 6, 7, 8, 9]));
console.log(sortTwisted37([12, 13, 14]))