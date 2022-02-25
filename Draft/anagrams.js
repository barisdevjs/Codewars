function isAnagram(stringOne, stringTwo) {
    const arrOne = stringOne.split('').sort((a,b) => a -b)
    const arrTwo = stringTwo.split('').sort((a,b) => a -b)
    
    return arrOne.every((e, idx) => arrTwo.includes(e)) &&
      arrTwo.every((e, idx) => arrOne.includes(e))
      
      ? true : false
  }

  console.groupCollapsed(
    (isAnagram("rasp", "spar"), true),
    (isAnagram("", ""), true),
    (isAnagram("gslkdj", "asdlfkjgj"), false),
    (isAnagram("tom marvolo riddle", "i am lordvoldemort"),true),
    (isAnagram("hello", "hdkwl"), false ),
  )

  // write a closure with functions


