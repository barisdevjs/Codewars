const findNb = m => {
    let total = 0
    let n = 0
  
    while(total < m) {
      n += 1
      total += n**3
    }
  
    return total === m ? n : -1
  }
  