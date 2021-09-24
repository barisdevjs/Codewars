
function triangle(row) {                           // Needs a performance optimization //
    let nextRow = [];
    let result = row.split("")
    for (var j=0; j < row.length-1; j++) {
      nextRow = []
      for (var i=0; i <result.length -1; i++){
        nextRow.push(sumLetters(result[i],result[i+1]))
      }
      result = nextRow.slice(0)
    }
    return result.join("")
  }
  
function sumLetters(a, b) {
    switch (a+b) {
      case 'BG':
      case 'GB':
      case 'RR': return 'R'; break;
      case 'BR':
      case 'RB':
      case 'GG': return 'G'; break;
      case 'RG':
      case 'GR':
      case 'BB': return 'B'; break;
    }
}

console.log(triangle('RBRGBRB'))