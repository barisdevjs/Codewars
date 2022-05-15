Array.prototype.sameStructureAs = function (other) {
    return (this.length === other.length) ? this.every(function(val, ind){
      return Array.isArray(val) ? val.sameStructureAs(other[ind]) : true;
    }) : false;
};
console.log([1, 2, 3].sameStructureAs([1, 2, 3]));