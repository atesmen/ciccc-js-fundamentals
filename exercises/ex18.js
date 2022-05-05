/*
Write a named function expression that stores the function in a variable called cry and returns "boohoo!". Don't forget to call the function using the variable name, not the function name:

cry();
Returns: boohoo!
*/
const cry = function expression(number){
    let crying = "";
   for(let i = 0; i<number ; i++){
        crying += "BooHoo!";
   }
   return crying
}
console.log(cry(3));

