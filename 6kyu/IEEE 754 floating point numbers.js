function numToIEEE_754(number) {
    var i, result = "";
    var dv = new DataView(new ArrayBuffer(8));

    dv.setFloat64(0, number, false);

    for (i = 0; i < 8; i++) {
        var bits = dv.getUint8(i).toString(2);
        if (bits.length < 8) {
            bits = new Array(8 - bits.length).fill('0').join("") + bits;
        }
        result += bits;
    }
  const part1 = result.slice(0,1)
  const part2= result.slice(1,12)
  const part3= result.slice(12)
  
    return part1.concat(' ',part2,' ',part3)
}

console.log(numToIEEE_754(15.875))