function validBraces(braces) {
    const mapOpen = ['(', '[', '{'];
    const mapClose = [')', ']', '}'];
    const stack = [];
    for (let i = 0; i < braces.length; i++) {
        let brace = braces[i];
        if (mapOpen.includes(brace)) {
            stack.push(brace);
        } else {
            if (stack.length === 0) {
                return false;
            }
            let last = stack.pop();
            if (mapOpen.indexOf(last) !== mapClose.indexOf(brace)) {
                return false;
            }
        }
    }
    return stack.length === 0;
}

console.log(validBraces("(){}[]"));
// console.log(validBraces("([{}])"));