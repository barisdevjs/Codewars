/*
 * Remember, board coloring starts with top left cell => WHITE
 * and then alternates with BLACK as in a usual chessboard.
 * @param {number[]} cols contains the N widths of the N columns of the chessboard
 * @param {number[]} rows contains the N heights of the N rows of the chessboard
 * @returns {number[]} a 2-element array, [totalWhiteArea, totalBlackArea]
 **/
/**
 * Remember, board coloring starts with top left cell => WHITE
 * and then alternates with BLACK as in a usual chessboard.
 * @param {number[]} cols contains the N widths of the N columns of the chessboard
 * @param {number[]} rows contains the N heights of the N rows of the chessboard
 * @returns {number[]} a 2-element array, [totalWhiteArea, totalBlackArea]
 **/
function whiteBlackAreas(cols, rows) {

    let totalWhiteArea = 0;
    let totalBlackArea = 0;
    const totalArea = cols.reduce((acc, curr) => acc + curr, 0) * rows.reduce((acc, curr) => acc + curr, 0);
    // only calculate the total white area if there are an even number of columns and rows
    for (let i = 0; i < cols.length; i++) {
        for (let j = 0; j < rows.length; j++) {
            if ( i % 2 === 0 && j % 2 === 0) {
                totalWhiteArea += cols[i] * rows[j];
            }
            if ( i % 2 === 1 && j % 2 === 1) {
                totalWhiteArea += cols[i] * rows[j];
            }
        }
    }
    return [totalWhiteArea, totalArea-totalWhiteArea];
}



console.log(whiteBlackAreas([3, 1, 2, 7, 1], [1, 8, 4, 5, 2]));
console.log(whiteBlackAreas([3, 1, 2, 7, 1, 11, 12, 3, 8, 1], [1, 8, 4, 5, 2, 21, 5, 2, 2, 17]));

/*   function whiteBlackAreas(cols, rows) {
     
    let totalWhiteArea = 0;
    let totalBlackArea = 0;
    for (let i = 0; i < rows.length; i++) {
        const rowEl = rows[i];
        for (let j = 0; j < cols.length; j++) {
            const colEl = cols[j];
            if (i % 2 === 0) {
                if (j % 2 === 0) {
                    totalWhiteArea += rowEl * colEl;
                } else {
                    totalBlackArea += rowEl * colEl;
                }
            } else {
                if (j % 2 === 0) {
                    totalBlackArea += rowEl * colEl;
                } else {
                    totalWhiteArea += rowEl * colEl;
                }
            }
        }
    }
    return [totalWhiteArea, totalBlackArea];
} */