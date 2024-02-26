function toAndFrom(a, b, t) {
    let direction = a > b ? -1 : 1;
    let distance = Math.abs(a - b);
    let diff = Math.abs(a - b)
    let division = 0
    while (t > diff) {
        t -= diff
        division++
    }
    if (a > b && b > t && t > a - b) {
        return a - t;
    }

    if (division % 2 === 1 && a < b) {
        return b - t
    }

    if (division % 2 === 1 && a > b) {
        return b + t
    }
    if (division % 2 === 0 && a < b) {
        return a + t
    }
    if (division % 2 === 0 && a > b) {
        return a + t * direction;
    }

    if (distance < a && distance < b) {
        if (b < a) {
            return a + t * direction;
        } else {
            return a - t * direction;
        }
    }
}


console.log(toAndFrom(76, 14, 19))
// console.log(toAndFrom(5, 23, 25));
// console.log(toAndFrom(99, 9, 4));
// console.log(toAndFrom(1, 10, 8))
// console.log(toAndFrom(10, 4, 8))