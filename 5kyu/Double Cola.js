/* function whoIsNext(names, r){
    let peopleInLine = names.length;
   let copiesOfEachPerson = 1;
   
   while (r > peopleInLine) {
     r -= peopleInLine;
     copiesOfEachPerson *= 2;
     peopleInLine *= 2;
   }
   
   return names[Math.floor((r - 1) / copiesOfEachPerson) % peopleInLine];
 }
 */
console.log(whoIsNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 52))