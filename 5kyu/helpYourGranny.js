function tour(friends, fTowns, distTable) {
    var res=0, temp=0;
    
      friends.map(friend => {
        fTowns.map(town => {
          if( friend == town[0] ){
            res += Math.sqrt(Math.pow(distTable[distTable.indexOf(town[1])+1], 2)-temp*temp);
            temp=distTable[distTable.indexOf(town[1])+1];
          }
        })
      });
    
    return Math.floor(res)+temp;
  }


console.log(tour(["A1", "A2", "A3", "A4", "A5"],
[["A1", "X1"], ["A2", "X2"], ["A3", "X3"], ["A4", "X4"]],
["X1", 100.0, "X2", 200.0, "X3", 250.0, "X4", 300.0]
))