/*
Write an anonymous function expression that stores a function in a variable called "laugh" and outputs the number of "ha"s that you pass in as an argument.

laugh(3);
Returns: hahaha!
*/
const laugh = function (max){
    let haha ="";
    for (let i = 0; i<max ; i++){
        haha += "Ha ";
    }
    return haha;
}

console.log(laugh(3));