function oneCharDifference(s1, s2) {
    let longest = s1.length >= s2.length ? s1 : s2;
    let shortest = longest === s1 ? s2 : s1;
    for (let i = 0; i < longest.length; i++) {
        if (longest[i] != shortest[i]) {
            let word;
            if (longest.length === shortest.length) {
                word = shortest.slice(0, i) + longest[i] + shortest.slice(i + 1);
            } else {
                word = shortest.slice(0, i) + longest[i] + shortest.slice(i);
            }
            if (word === longest) return `${s1} and ${s2} differ by one letter`
        }
    }
    return `${s1} and ${s2} are identical`
}

console.log(oneCharDifference('grant', 'gant '));