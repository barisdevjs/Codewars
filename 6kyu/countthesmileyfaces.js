function countSmileys(arr) {
    // regex for smiley
    var regex = /[:;][-~]?[)D]/g;
    return arr.filter(x => x.match(regex)).length;
}