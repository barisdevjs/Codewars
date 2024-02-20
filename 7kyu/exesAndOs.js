function XO(str) {
const map = str.toLowerCase().split('').reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
}, {});
    return map['x'] === map['o'] ? true : false;
}

console.log(XO('Oo'))
