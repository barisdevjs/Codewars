function solve(arr){  
    const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    let result = [];
    for(let i = 0; i < arr.length; i++){
        let counter = 0
        const el = arr[i].toUpperCase();
        for ( let j = 0; j < el.length; j++){
            const char = el[j];
            if ( j=== alphabet.indexOf(char) ) {
                counter++;
            }
        }
        result.push(counter);
        counter = 0;
    }
    return result
}
console.log(solve(["abide","ABc","xyz"]));
console.log(solve(["IAMDEFANDJKL","thedefgh","xyzDEFghijabc"]));