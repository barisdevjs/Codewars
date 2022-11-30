function encode (input) {
  return input.map(card => {
    let [value, suit] = card.split('');
    switch(value) {
        case 'A': value =  0; break;
        case 'T': value =  9; break;
        case 'J': value = 10; break;
        case 'Q': value = 11; break;
        case 'K': value = 12; break;
        default:  value = Number(value) - 1;
    }
    
    switch(suit) {
        case 'c': suit = 0; break;
        case 'd': suit = 13; break;
        case 'h': suit = 26; break;
        case 's': suit = 39; break;
    }
    
    return value + suit;
    
  }).sort((a,b) => a - b);
}

function decode (input) {
  return input.sort((a,b) => a - b).map(code => {
    let value;
    let suit;
    
    if (code < 13) {
      suit = 'c';
    }
    else if (code < 26) {
      code -= 13;
      suit = 'd';
    }
    else if (code < 39) {
      code -= 26;
      suit = 'h';
    }
    else {
      code -= 39;
      suit = 's';
    }
    
    switch(code) {
      case 0: value = 'A'; break;
      case 9: value = 'T'; break;
      case 10: value = 'J'; break;
      case 11: value = 'Q'; break;
      case 12: value = 'K'; break;
      default: value = (code + 1).toString();
    }
    
    return value + suit;
  });
}
console.log(pickPeaks([3,2,3,6,4,1,2,3,2,1,2,2,2,1]));
console.log(pickPeaks([1,2,3,6,4,1,2,3,2,1]));