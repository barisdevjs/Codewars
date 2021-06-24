function accum(s) {
    return  s.split('').map((item, idx) =>  ( item.toUpperCase() + item.toLowerCase().repeat(idx))).join('-')
    }