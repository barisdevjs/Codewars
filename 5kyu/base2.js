function intToNegabinary(i) {
    let binary = "";
    if (i < 0) {
      i = i >>> 0;
    }
    while(Math.ceil(i/2) > 0){
        binary = i%2 + binary;
        i = Math.floor(i/2);
    }
    return binary;
}

function negabinaryToInt(s) {
return 0;
}


console.log(intToNegabinary(6));