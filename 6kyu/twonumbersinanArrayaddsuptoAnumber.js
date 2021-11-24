function hasPair(arr, S) {

  let sums = [];
  let hashTable = {};

  // check each element in array
  for (let i = 0; i < arr.length; i++) {
 
    // calculate S - current element
    let sumMinusElement = S - arr[i];

    // check if this number exists in hash table
    // if so then we found a pair of numbers that sum to S
    if (hashTable[sumMinusElement.toString()] !== undefined) { 
      sums.push([arr[i], sumMinusElement]);
    }

    // add the current number to the hash table
    hashTable[arr[i].toString()] = arr[i];

  }

  // return all pairs of integers that sum to S
  return sums.length > 0 ? true :false

}