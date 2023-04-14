const mergeEvery = (target, source, count = 4) => {
    if (count <= 0 || target.length === 0) {
      return target;
    }
  
    let result = [target[0]];
    let i = 0;
    let j = 0;
    while (i < target.length - 1) {
      if ((i + 1) % count === 0 && j < source.length) {
        result.push(source[j]);
        j++;
      }
      result.push(target[i + 1]);
      i++;
    }
    return result
  }


console.log(mergeEvery([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], ['a', 'b', 'c', 'd']))
console.log(mergeEvery([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], ['a', 'b', 'c', 'd'], 3))
console.log(mergeEvery([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], ['a', 'b', 'c', 'd'], 1))
console.log(mergeEvery(['a', 'b', 'c', 'd'], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
console.log(mergeEvery(['a', 'b', 'c', 'd'], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],2))

