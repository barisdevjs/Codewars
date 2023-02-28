function f(x, y, z) {
    let sum = 0;
    let arr = [x, y, z];

    while( arr.some( e =>  e >= 1) ){
        sum += arr.reduce((a,b) => a*b);
        arr = arr.map(e => e - 1);
    }

    return sum;

}


// console.log(f(3, 4, 2)); // 30
// console.log(f(2, 2, 3)); // 14 
console.log(f(41, 619, 408)); // 1405155850

/*     let arr = [x,y,z].map(e => e -1)
    let sum = 0
    let iterator = 1;

    for(let i = 0; i < arr.length; i++){
        const filter = arr.filter(element => element > iterator)
        filter
            if(filter > 0){
            sum += iterator * ( iterator +1)
        }

        iterator++;
    }
    return sum  + x*y*z */