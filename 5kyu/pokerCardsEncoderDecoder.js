  function encode(input) {
if(!Array.isArray(input)){return null}

  cards = ['A','2','3','4','5','6','7','8','9','T','J','Q','K']
  suits = ['c','d','h','s']
  obj = {}
  x = 0
  z = [];

  for(let i=0; i<suits.length; i++){
    for(let j=0; j<cards.length; j++){
      obj[cards[j]+suits[i]] = j + x
    }
      x += 13
  }

  if(Number.isInteger(input[0])){
    arr = input.sort((a, b) => a - b);

    arr.forEach(function(element) {
      for (let key in obj)
        if (obj[key] === element) return z.push(key);
    });

    return z
  } else {
    input.forEach(function(element) {
      z.push(obj[element])
    });
    return z.sort((a, b) => a - b);
  }
}
  


function decode(input) {
  const numbers = input.sort((a, b) => a - b)
  const suits = ['c','d','h','s']
 let array =  input.map((e) => {
    const remainder = e % 13;
    const suit = Math.floor(e / 13);
    const card = remainder === 0 ? 'A' : remainder === 12 ? 'K' : remainder === 11 ? 'Q' : remainder === 10 ? 'J' : remainder === 9 ? 'T' : remainder + 1;
    let arr = `${card}${suits[suit]}`;
    // sort the array according to suits
    return arr;
  })
  const key = array.map((e) => e[1])
// sort the array according to key
  array = array.sort((a, b) => suits.indexOf(a[1]) - suits.indexOf(b[1]));
  return array.sort((a, b) => numbers.indexOf(a) - numbers.indexOf(b));
}


// console.log(decode(['Ac', 'Ks', '5h', 'Td', '3c']));
  console.log(decode([13,37,30]));
  // console.log(decode([13,30,37]));
  //  ['Ad', '5h', 'Qh']
  /*
    c     |     d     |    h     |    s
----------------------------------------
 0: A      13: A      26: A      39: A
 1: 2      14: 2      27: 2      40: 2
 2: 3      15: 3      28: 3      41: 3
 3: 4      16: 4      29: 4      42: 4
 4: 5      17: 5      30: 5      43: 5
 5: 6      18: 6      31: 6      44: 6
 6: 7      19: 7      32: 7      45: 7
 7: 8      20: 8      33: 8      46: 8
 8: 9      21: 9      34: 9      47: 9
 9: T      22: T      35: T      48: T
10: J      23: J      36: J      49: J
11: Q      24: Q      37: Q      50: Q
12: K      25: K      38: K      51: K
  */

// create a map from  previous values
// to the next values

