function firstNonRepeatingLetter(s) {
    var arr = s.split("").map(e => e.toLowerCase());
    var obj = {};
    var result = "";
    for (var i = 0; i < arr.length; i++) {
        if (obj[arr[i]] ) {
        obj[arr[i]]++;
        } else {
        obj[arr[i]] = 1;
        }
    }
    for (var j = 0; j < arr.length; j++) {
        if (obj[arr[j]] === 1) {
        result = s[j];
        break;
        }
    }
    return result;
  }

//   console.log(firstNonRepeatingLetter('moonmen'));
  console.log(firstNonRepeatingLetter('sTreSS'));
