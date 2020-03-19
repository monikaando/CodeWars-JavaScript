// Write a function that takes in two parameters:
// an array that contains integers,
// a number, "x".
// Loop through the array
// the current index value is divisible by x
// Return a new array that contains only the numbers in the original that were divisible by "x".


function divisibleBy(numberArray, x) {
    var newArray = [];
    for (var i = 0; i < numberArray.length; i++) {
        if (numberArray[i] % x === 0) {
            newArray.push(numberArray[i]);
        }
    }
    return newArray;
}
console.log(divisibleBy([2,4,5,3,8], 2))