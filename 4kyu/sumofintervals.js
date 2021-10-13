function sumIntervals(intervals){
    const numbers = {};
    intervals.forEach(function(x) {
      for (var i = x[0]; i < x[1]; i++) {
        numbers[i] = i;
        numbers
      }
    });
    return Object.keys(numbers).length;
  }
//console.log(sumIntervals([[1,4],[7, 10],[3, 5]]))
// console.log(sumIntervals([[1,5],[10, 20],[1, 6],[16, 19],[5, 11]]))

function sumIntervals(intervals) {
    const ranges = new Set();
    
    intervals.forEach(([start, end]) => {
      for (let i = start; i < end; i++) ranges.add(i);
    });
    big
    return ranges.size;
  }
