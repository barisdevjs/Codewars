function nbYear(p0, percent, aug, p) {
    for ( var i = 0; p0 < p; i++ ) {
      p0 += (( percent / 100) * p0) + aug
    }
    return i
  }