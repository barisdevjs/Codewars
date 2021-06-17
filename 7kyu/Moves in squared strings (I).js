function vertMirror(strng) {
    var step1 =    strng.split('\n').map((element) => [...element].reverse().concat().join('').toString());
   let reggeX = /(\W)+/gi
    return step1.toString().replace(reggeX, '\n')
   }
   function horMirror(strng) {
       return strng.split('\n').reverse().join('\n')
   }
   function oper(fct, s) {
        return fct(s)
   }