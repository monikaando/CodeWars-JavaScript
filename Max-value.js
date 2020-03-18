// define a function that takes in an array of numbers as a parameter and returns the largest value in that array. (you may not use the .max() function)


function largestValue(array) {
    let maxValue = array[0]
    for(let i = 0; i < array.length; i++) {
        if (maxValue < array[i]) {
            maxValue = array[i]
        }
    } 
    return ('maxValue is: ' + maxValue)
}
console.log(largestValue([1,3,6,3]))
//or 
function largestValue(array) {
    let maxValue = Math.max(...array)
   return ('maxValue is: ' + maxValue)
}
console.log(largestValue([1,3,6,3]))