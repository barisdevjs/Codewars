// DOES NOT PASS THE PERFORMANCE TESTS

const nQueen = function (N) {
  const result = [];

  const isSafe = (board, row, col) => {
    // Check if there is a queen in the same column
    for (let i = 0; i < row; i++) {
      if (board[i][col] === 1) {
        return false;
      }
    }

    // Check if there is a queen in the left diagonal
    for (let i = row, j = col; i >= 0 && j >= 0; i--, j--) {
      if (board[i][j] === 1) {
        return false;
      }
    }

    // Check if there is a queen in the right diagonal
    for (let i = row, j = col; i >= 0 && j < N; i--, j++) {
      if (board[i][j] === 1) {
        return false;
      }
    }

    return true;
  };

  const solveNQueens = (board, row) => {
    if (row === N) {
      // If all queens are placed successfully, add the current board to the result
      result.push(board.map((row) => [...row]));
      return;
    }

    for (let col = 0; col < N; col++) {
      if (isSafe(board, row, col)) {
        // Place the queen if it's safe
        board[row][col] = 1;

        // Recur for the next row
        solveNQueens(board, row + 1);

        // Backtrack and remove the queen if the current placement doesn't lead to a solution
        board[row][col] = 0;
      }
    }
  };

  // Initialize the board with zeros
  const board = Array.from({ length: N }, () => Array(N).fill(0));

  // Start solving the N-Queens problem
  solveNQueens(board, 0);

  // Return the column indices where queens are placed in the first solution, or an empty array if no solution is found
  return result.length > 0 ? result[0].map((row) => row.indexOf(1)) : [];
};

console.log(nQueen(4));
