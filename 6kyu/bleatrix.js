
function trotter(n) {
  if (n === 0) return 'INSOMNIA';

  const set = new Set(String(n).split(''));
  let iterator = 2;
  while (set.size < 11) {
    const newS = String(n * iterator)
    newS.split('').forEach(x => set.add(x));
    iterator++;
    if (set.size === 10) {
      // return last number of newS
      return Number(newS)
    }
  }
  return set
}
/*

function trotter(N) {
    if (N === 0) return 'INSOMNIA';
    
    const digits = [false, false, false, false, false, false, false, false, false, false];
    
    let n = N;
    let i = 0;
    let found = 0;
    
    for (;found < 10;) {
      // There's no need for this multiplication:
  
      n = N * ++i;
      
      // Type conversion + Built-in String.prototype.split(), both can
      // be avoided:
  
      const chars = (n + '').split('');
      
      let j = chars.length;
      
      for (;j;) {
        const digit = chars[--j];
              
        if (!digits[digit]) {
          digits[digit] = true;
          
          ++found;
        }
      }
    }
    
    return n;
  }


*/
console.log(trotter(1692));