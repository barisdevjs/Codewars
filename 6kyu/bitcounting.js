var countBits = function(n) {
    return n.toString(2).split('').filter((e) => e == 1).length
   };