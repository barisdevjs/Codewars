function pigIt(str){
    const splitted = str.split(' ')
    const first = splitted.map((e) => e.slice(1)+ e.slice(0,1) + 'ay').join(' ')
    const second = first.slice(-1)
     let regex = /(\W(ay))/g
     let len = first.length
    if (regex.test(first) === true) 
     { return first.slice(0, len-2) }
      else { return first}
  }
  console.log(pigIt('Pig latin is cool ?'))