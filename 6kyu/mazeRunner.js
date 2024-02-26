function mazeRunner(maze, directions) {
    let pos = findStart(maze);
    for (let i = 0; i < directions.length; i++) {
      switch (directions[i]) {
        case "N":
          pos = [pos[0] - 1, pos[1]];
          break;
        case "S":
          pos = [pos[0] + 1, pos[1]];
          break;
        case "W":
          pos = [pos[0], pos[1] - 1];
          break;
        case "E":
          pos = [pos[0], pos[1] + 1];
          break;
      }
      if (!isValidPos(maze, pos)) {
        return "Dead";
      }
      if (isFinish(maze, pos)) {
        return "Finish";
      }
    }
    return "Lost";
  }
  
  function findStart(maze) {
    for (let i = 0; i < maze.length; i++) {
      for (let j = 0; j < maze[i].length; j++) {
        if (maze[i][j] === 2) {
          return [i, j];
        }
      }
    }
  }
  
  function isValidPos(maze, pos) {
    let row = pos[0];
    let col = pos[1];
    return row >= 0 && row < maze.length && col >= 0 && col < maze[row].length && maze[row][col] !== 1;
  }
  
  function isFinish(maze, pos) {
    return maze[pos[0]][pos[1]] === 3;
  }
  
