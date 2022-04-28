const soccer_substitution = (t1 ,t2) => {
const res1 = [];
let total1 = 990;
let total2 = 990;
t1.forEach((t1_player => {
    if( t1_player) {
        total1 -= 91 - t1_player;
    }
}));
t2.forEach((t2_player => {
    if( t2_player) {
        total2 -= 91 - t2_player;
    }
}));
return [total1,total2];
}

console.log(soccer_substitution([88,90],[5,45,46]));
console.log(soccer_substitution([33,7],[83]));
console.log(soccer_substitution([],[]));

