function likes(names) {
    const len = names.length;
    return (len == 0) ? 'no one likes this'
    :(len == 1) ? names[0] + ' likes this'
    :(len == 2) ? names[0] + ' and ' + names[1] + ' like this'
    :(len == 3) ? names[0] + ', '+ names[1] + ' and ' + names[2] + ' like this'
    : names[0] + ', '+ names[1] + ' and ' + (len-2) + ' others like this';
   }