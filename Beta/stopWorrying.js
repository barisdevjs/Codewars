function worries(str){
    let arr =["Making last-minute changes","Sitting in a dark room and shaking","Crying","Laughing hysterically","Not eating"]
    return arr.includes(str)?"Stop worrying, everything will be all right!":"Do you really care?"
  }
console.log(worries("Making last-minute changes"))