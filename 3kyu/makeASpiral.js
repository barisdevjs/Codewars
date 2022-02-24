/* function spiralize(n) {
    return Array(n)
        .fill(Array(n).fill(3))
        .map((x, r) =>
            x.map((y, c) => {
                return +(
                    // top
                    (r < n / 2 && r % 2 === 0 && c >= r - 2 && c <= n - r - 1) ||
                    // right
                    ((n - c) % 2 === 1 && r > n - c - 1 && r <= c) ||
                    // bottom
                    ((n - r) % 2 === 1 && c > n - r - 1 && c < r) ||
                    // left
                    (c % 2 === 0 && r > c + 1 && r < n - c)
                );
            })
        );
        console.log(spiralize(5));
} */


