/* function triangle(row) {                           // Needs a performance optimization //
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
      case 'RR': return 'R'; 
      case 'BR':
      case 'RB':
      case 'GG': return 'G'; 
      case 'RG':
      case 'GR':
      case 'BB': return 'B'; 
    }
} */


const colors = ["R", "G", "B"];

function combineColors(color1, color2) {
  if (color1 === color2) {
    return color1;
  }

  return colors.find(color => color !== color1 && color !== color2);
}

function log3(x) {
  return Math.log(x) / Math.log(3);
}

function triangle(row) {
  const { length } = row;

  if (length === 1) {
    return row[0];
  }

  const n = Math.floor(log3(length - 1));
  const idealLength = Math.pow(3, n) + 1;

  if (length === idealLength) {
    return combineColors(row[0], row[length - 1]);
  }

  const size = length - idealLength + 1;
  const firstColor = triangle(row.substring(0, size));
  const secondColor = triangle(row.substring(length - size));

  return combineColors(firstColor, secondColor);
}
console.log(triangle('RBRGBRB'))
console.log(triangle('RBRGBRBGGRRRBGBBBGG'))