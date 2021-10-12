function sumIntervals(intervals){
if (intervals.length === 0)  [];
 if (intervals.length === 1) { return Math.abs(intervals[0][1] - intervals[0][0])}
    function numberRange (start, end) {
            return new Array(end - start+1).fill().map((d, i) => i + start );
    }

const arrVersions = intervals.map(i => numberRange(i[0], i[i.length-1])).sort((a, b) => a[0] - b[0]);
arrVersions
for (let i = 0; i < arrVersions.length; i++) {
    const element = Number(arrVersions[i].slice(-1));
    const second = arrVersions[i+1][0];
    if ( element >= second ) {
       arrVersions[i] = [...new Set (arrVersions[i].concat(arrVersions[i+1]))]
       arrVersions.splice(i+1,1)
    } 
    console.log(arrVersions)
}
return arrVersions.map((e) => Number([e.pop() -e.shift()])).reduce((a, b) => a + b);
}

 //console.log(sumIntervals([[1,5]]))
 console.log(sumIntervals([[ 2, 3, 4, 5, 6, 7, 8, 9 ],
    [ 2, 3, 4 ],
    [ 2, 3, 4, 5, 6, 7, 8, 9 ],
    [ 2, 3, 4, 5 ] ]))
// console.log(sumIntervals([[1,4],[7, 10],[3, 5]]))
// console.log(sumIntervals([[1,5],[10, 20],[1, 6],[16, 19],[5, 11]]))


