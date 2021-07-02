 function cakes(recipe, available) {
    
    var n=[];
    for( key in recipe){
        if (key in available){
            var num=Math.floor(available[key]/recipe[key]);
            n.push(num);
        }
        else{ return 0;}
    }
    return Math.min(...n)
}
console.log(cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200}))