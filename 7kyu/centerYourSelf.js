function center (strng, width, fill = ' ') {
    const len = strng.length;
    if ( len >= width) return strng;
    const willAdded = width -len;
    let left, right = 0;
    if ( willAdded % 2 == 0) {
      left = willAdded/2;
      right = willAdded / 2
    } else {
      left = Math.ceil(willAdded/2);
      right = Math.floor(willAdded/2);
    }
    return fill.repeat(left) + strng + fill.repeat(right);
  }

  console.log(center('hello', 10, '*'))