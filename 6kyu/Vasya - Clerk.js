function tickets(peopleInLine) {
    var bills = [0, 0, 0]
    for (var i = 0; i < peopleInLine.length; i++) {
      switch (peopleInLine[i]) {
        case 25:
          bills[0]++
          break
          
        case 50:
          bills[0]--
          bills[1]++
          break
          
        case 100:
          bills[1] ? bills[1]-- : bills[0] -= 2
          bills[0]--
          break
      }
      
      if (bills[0] < 0) {
        return 'NO'
      }
    }
    
    return 'YES'
}

  console.log((tickets([25,25,50,100])))
  // yes
