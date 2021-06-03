function numberOfCarries(a, b) {
    let arr = []
    let len = (a+b).toString().length
    const strA =  a.toString().padStart(len,0)
    const strB = b.toString().padStart(len,0)
    const arrA = [...strA].map((e) => Number(e))
    const arrB = [...strB].map((e) => Number(e))
    const total = arrA.map((e,i) => e = arrA[i] + arrB[i] ).reverse()
    function converter(arr) {
      const rev = total.reverse()
     const first = rev.map((e, i ,arr, acc= 0) => e > 9 ? ( arr[i+1] += 1 , arr[i] -= 10) : e )
    return first
    }
    let counter = 0
    for (let i = 0; i < total.length; i++) {
      
      if (total[i] > 9) {
        total[i] -= 10;
        total[i+1] += 1
        counter++
      }
      
    }
    return counter
    }