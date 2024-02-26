function findMatchedByPattern(pat) {
    return (s) => {
      let p = pat;
      for (let e of s) {
        if (!p.includes(e)) continue;
        if (e === p[0]) p = p.slice(1);
        else return false;
      }
      return !p;
    };
  }

// console.log(findMatchedByPattern('pyp')('polypi'))
// console.log(findMatchedByPattern('acs')('access'))
// console.log(findMatchedByPattern('acs')('ascess'))
