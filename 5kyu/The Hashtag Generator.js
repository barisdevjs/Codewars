function generateHashtag (str1) {
    if ( str1  == '' ) return false
    let str = str1.split(' ')
    let mapped = str.map((e) => e.charAt(0).toUpperCase() + e.slice(1)).join('')
    mapped = '#'.concat(mapped)
    return ( mapped === '#' || mapped.length > 140 ) ? false : mapped
  }

  console.log(generateHashtag('Do We have A Hashtag'))