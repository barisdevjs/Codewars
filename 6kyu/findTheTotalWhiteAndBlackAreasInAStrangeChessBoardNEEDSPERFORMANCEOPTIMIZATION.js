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
/* function whiteBlackAreas(cols, rows) {

    let totalWhiteArea = 0;
    const totalArea = cols.reduce((acc, curr) => acc + curr, 0) * rows.reduce((acc, curr) => acc + curr, 0);
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
} */

function whiteBlackAreas(cols, rows) {
    let totalWhiteArea = 0;
    let totalBlackArea = 0;

    const totalArea = cols.reduce((acc, curr) => acc + curr, 0) * rows.reduce((acc, curr) => acc + curr, 0);
    // calculate total white area for each column and row with a single loop
    for (let i = 0; 2*i < cols.length; i++) {
        totalWhiteArea += cols[i] * // multiply every even element in the rows array
            rows[i] + // multiply every even element in the cols array
            cols[cols.length - 1 - i] * // multiply every odd element in the rows array
            rows[rows.length - 1 - i]; // multiply every odd element in the cols array
    }

    return [totalWhiteArea, totalArea - totalWhiteArea];
}





        console.log(whiteBlackAreas([3, 1, 2, 7, 1], [1, 8, 4, 5, 2]));
        console.log(whiteBlackAreas([3, 1, 2, 7, 1, 11, 12, 3, 8, 1], [1, 8, 4, 5, 2, 21, 5, 2, 2, 17]));

