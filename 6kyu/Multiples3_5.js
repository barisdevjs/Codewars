function solution(number){
    var empty = []
    for (let i = 0; i < number; i++) {
      if (i%5 == 0 || i%3 ==0){
        empty.push(i)
      }
    }
    return empty.reduce((acc, val) => acc + val, 0)
  }