function howManyStep(a,b){                                  
    let count = 0;
    if (a == b) {
      return count += 0
    } else if ( a * 2 == b ) {
        count++
        a *= 2
      } else if ( a * 2 > b) {
        count += b - a
        return count
      }
    while (b  > a ) {
            if (b-a < a) {
              count += b-a
              return count
            }
           if (b/2 == Math.floor(b/2)) {
             b =  b / 2
             count++;
           } else if (b/2 != Math.floor(b/2)) {
             b = b - 1;
             count ++
             if (b == a) {
               break
             }
             b = b / 2;
             count++ 
           }
        }
      
      return count 
    }