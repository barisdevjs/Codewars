function isValidWalk(walk) {
    const map = walk.reduce((acc, curr) => {
        acc[curr] = (acc[curr] || 0) + 1;
        return acc;
    }, {})
    const size = walk.length === 10 ? true : false;
    const direction = map.n === map.s && map.w === map.e ? true : false;
    return direction && size;
}


console.log(isValidWalk(['w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e']))