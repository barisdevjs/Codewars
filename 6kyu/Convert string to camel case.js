function toCamelCase(str){
    const regex = /([_||-])+/g
    var arr =  str.split(regex)
    let first = arr[0]
    const mapped = str.replace(regex, ' ').split(' ').map((e) => e.charAt(0).toUpperCase() + e.slice(1))
    return first + mapped.slice(1).join('')
    }