function letterFrequency(text){
console.log(text)
const regex = /[A-Za-z]/gi
let lowered = text.toLowerCase().match(regex, '')
if ( lowered === null) return []
const res = lowered.reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
}, {})
const arr = Object.entries(res).sort((a , b)=> b[1] - a[1] || a[0].localeCompare(b[0]));
return arr
}

// console.log(letterFrequency("As long as I'm learning something, I figure I'm OK - it's a decent day."))
console.log(letterFrequency('!@#$%^&*()_+ ,./[]'))

