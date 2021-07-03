function score(dice) {
  let total = 0;
  let ones = 0;
  let twos = 0;
  let threes = 0;
  let fours = 0;
  let fives = 0;
  let sixes = 0;

  dice.forEach(function(roll) {
    if (roll === 1) {
      ones++;
      if(ones === 3){
        total += 1000;
        ones = 0;
      }
    }
    if (roll === 5) {
      fives++;
      if(fives === 3){
        total += 500;
        fives = 0;
      }
    }
    if (roll === 2) twos++;
    if (roll === 3) threes++;
    if (roll === 4) fours++;
    if (roll === 6) sixes++;
  });

  total += ones*100;
  total += fives*50;
  if (sixes >= 3) total += 600;
  if (fours >= 3) total += 400;
  if (threes >= 3) total += 300;
  if (twos >= 3) total += 200;


  return total;

}

console.log(score([4, 4, 4, 3, 3]))