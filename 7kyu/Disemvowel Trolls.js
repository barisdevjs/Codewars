function disemvowel(str) {
    return str.replace(/([aioueAEIOU]+)/g , '')
   }

   console.log(disemvowel("ahmet"))