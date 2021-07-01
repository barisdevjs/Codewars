function longestPalindrome(str) {
    if (str.length === 1) return str.length
    let reggex = /([a-zA-Z0-9])/gi
    let strEdit = str.match(reggex).join('');
    strEdit
    let arr = strEdit.toLowerCase().split('').sort((a,b) => a.localeCompare(b))
    arr
     
    let arr2 = []
    let singles = 0;
    let length = arr.length
    for (let i = 0; i < length; i++) {
      const element = arr[i];
      const secElement = arr[i+1]
      if ( element === secElement ) {
        arr2.push(element, secElement)
        i += 1
      } else if (element !== secElement) {
        singles++
       continue
      } else {
        continue
      }
    }
    singles
    
    return singles == 0 ? arr2.length : arr2.length + 1
    }