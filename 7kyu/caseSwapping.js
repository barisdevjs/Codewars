function swap(str){
    if ( !str ) return str
    const arr = str.split('')
    if ( arr.every((e) => e === Number(e)) ) {
      return str
    }
    arr.map((e, i) => {
            if ( e === e.toUpperCase() ) {
                arr[i] = e.toLowerCase()
            } else {
                arr[i] = e.toUpperCase()
            }
        })
    return arr.join('')
  }

  console.log(swap('Hello'));