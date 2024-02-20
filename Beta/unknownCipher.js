function decryptIt(str) {
    const alb = "abcdefghijklmnopqrstuvwxyz";
    const rev = "zyxwvutsrqponmlkjihgfedcba";
    let res = '';
    const nums = str.match(/\d+/g).map(x => Number(x -1));
    nums
    const letters = str.match(/[a-z]+/gi)
    letters
    for (let i = 0; i < letters.length; i++) {
        for (let j = 0; j < alb.length; j++) {
            if (letters[i] === alb[j]  ) {
                res += rev[j];
            }
            if (letters[i] === alb[j].toUpperCase()) {
                res += rev[j].toUpperCase();
            }
        }
    }
    return res.split('').reverse().join('');

}
console.log(decryptIt("l1o2o3v4S5"));