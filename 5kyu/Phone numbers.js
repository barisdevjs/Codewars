function phoneNumber(phoneNumbers) {
  // CANT SOLVE
  let lengthMax = Math.max(...phoneNumbers.map((e) => e.length))
  let lengthShort = Math.min(...phoneNumbers.map((e) => e.length))
  const longBase = phoneNumbers.find((e) => e.length === lengthMax)
  const shortBase = phoneNumbers.find((e) => e.length === lengthShort)
  let arrVersions = phoneNumbers.map((e) => e.split(''))
  arrVersions
  let counter = 0
  let result = []
  for (let i = 0; i < lengthMax; i++) {
   const items = arrVersions.map((e) => e[i])
    result.push(items)
  }
  let count = 0
  let logged =  result.filter((e) => Boolean(e))
  logged = logged.flat(Infinity)
  logged
 
  for (let index = 0; index < logged.length ; index++) {
    const element = logged[index];
    const secElement = logged[index +1]
    if (element !== secElement) {
      count++
    }
  }

return count
}


console.log(phoneNumber(['0123456789', '0123987654', '0123987456', '2365498756', '2365498765']))
/* console.log(phoneNumber(['0','1']))
console.log(phoneNumber(['01','02','03']))
console.log(phoneNumber(['012','0123','01234'])) */