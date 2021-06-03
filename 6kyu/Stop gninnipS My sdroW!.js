function spinWords(...args){
    var args =Array.from(args).toString().split(' ') 
   return args.map(v => { if (v.length > 4) return v.split('').reverse().join(''); return v}).join(' ')
   }