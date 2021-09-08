function towerBuilder(nFloors, nBlockSz) {
    var pyr = [];
    for (var i = 0; i < nFloors; i++)
    {
      for (var j = 0; j < nBlockSz[1]; j++)
      {
        pyr.push("*".repeat(i*nBlockSz[0]*2) + "*".repeat(nBlockSz[0]));
      }
    }
    const def = pyr[pyr.length-1].length;
    for (var i = 0; i < pyr.length; i++)
    {
    pyr[i] = " ".repeat((def-pyr[i].length)/2) + pyr[i] + " ".repeat((def-pyr[i].length)/2)
    }
    return pyr;
  }
console.table(towerBuilder(3, [4,2]))
  