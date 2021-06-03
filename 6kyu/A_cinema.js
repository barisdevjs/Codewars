function cinema(boys,girls) {
    if (boys / girls > 2 || boys / girls < 0.5 || boys == 0 || girls == 0) {
      return null
    }
    const len = boys + girls
    let str = '';
    let first = str.padEnd(len, 'B')
    if ( boys/2 == girls) {
      first = str.padEnd(len, 'BGB')
    } else if (girls/2 == boys) {
      first = str.padEnd(len, 'GBG')
    } else  {
      if (boys > girls) {
        first = str.padEnd(len, 'BGB')
        if ( boys - girls > 1) {
         first= first.replace('BGBB', 'BGBG')
        } else if ( boys - girls === 1) {
          first = str.padEnd( (len ), 'BGB')
          first.padEnd( len, 'GB' )
        }
      } else if (boys < girls  )  {
        first = str.padEnd(len, 'GBG')
        if (girls - boys > 1) {
          first = first.replace('GBGG', 'GBGB')
        }else if ( boys - girls === -1) {
          first = str.padEnd(len-1, 'GB')
          first = first.concat('G')
        }
      } else {
        first = str.padEnd(len, 'BG')
      }
    }
     return first.toString()
  
  }