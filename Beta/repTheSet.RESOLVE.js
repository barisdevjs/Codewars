const powerSet = (str) => {
    let result = [];
    let strArr = str.split('');
    let strLen = strArr.length;
    for (let i = 0; i < Math.pow(2, strLen); i++) {
        let temp = '';
        for (let j = 0; j < strLen; j++) {
        if ((i & (1 << j)) !== 0) {
            temp += strArr[j];
        }
        }
        result.push(temp);
    }

  // check every element in result array and remove duplicates
    let uniqueResult = result.filter((item, index) => result.indexOf(item) === index);
   const b = uniqueResult.map(element => {
    element = element.split('');
    // make the element duplicate free
    return [...new Set(element)].sort((a, b) => a.localeCompare(b)).join('');
    })
    return [...new Set(b)].sort((a, b) => a.localeCompare(b));
}




  console.log(powerSet('hello'))