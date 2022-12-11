function topThreeWords(text) {
const cleanStr = clean(text)
if ( !cleanStr) return []
cleanStr
const mapped = cleanStr.reduce((acc,cur) => {
     acc[cur] === null | acc[cur] === undefined ? acc[cur] =0 : acc[cur]++
     acc[cur]++
     return acc
}, {})
mapped
return sorter(mapped).slice(0,3)
}

function clean(text) {
    return text.toLowerCase().replace(/[^a-zA-z\s']/g, ' ').split(' ').filter(item => item && item !== "'")
}

function sorter(list) {
    return Object.keys(list).sort(function(a,b){return list[b]-list[a]})
} 



console.log(topThreeWords("  //wont won't won't "))

