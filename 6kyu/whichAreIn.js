function inArray(arrA, arrB){
    let arr = arrB.join(" ")
    return arrA.filter(item => arr.search(item) !== -1 && item !== undefined ).sort()
  }

console.log(inArray(["arp", "live", "strong"], ["lively", "alive", "harp", "sharp", "armstrong"]));