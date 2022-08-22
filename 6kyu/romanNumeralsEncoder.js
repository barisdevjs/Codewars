function solution(number){
    const dict = {
        'M': 1000,
        'CM': 900,
        'D': 500,
        'CD': 400,
        'C': 100,
        'XC': 90,
        'L': 50,
        'XL': 40,
        'X': 10,
        'IX': 9,
        'V': 5,
        'IV': 4,
        'III': 3,
        'II': 2,
        'I': 1,
  }

    let result = '';
    for (let key in dict) {
        while (number >= dict[key]) {
            result += key;
            number -= dict[key];
        }
    }
    return result;
}
console.log(solution(1990));