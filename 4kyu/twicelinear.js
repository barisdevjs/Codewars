/* function dblLinear(n) {
    let u = [1], x = 0, y = 0
    for (let i = 0; i < n; i++) {
        let nextX = 2 * u[x] + 1, nextY = 3 * u[y] + 1
        if (nextX <= nextY) {
            u.push(nextX)
            x++
            if (nextX == nextY)
                y++
        } else {
            u.push(nextY)
            y++
        }
    }
    return u[n]
} */

const dblLinear = number => {
    let series = { 1: 1 };
    let keys = Object.keys(series);
    let index = 0;
  
    while (index < number) {
      series[ keys[index] * 2 + 1 ] = 1;
      series[ keys[index] * 3 + 1 ] = 1;
      index++;
      keys = Object.keys(series);
    }
    return keys[10];
  }

console.log(dblLinear(10))