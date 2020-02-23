// 7 kyu
// No oddities here
// Write a small
// function that returns the values of an array that are not odd.

// All values in the array will be integers.Return the good values in the order they are given.

// function noOdds(values)

function noOdds(values) {
    let numbers = [];
    for (let i = 0; i < values.length; i++) {
        if (values[i] % 2 === 0) {
            numbers.push(values[i]);
        }
    }
    return numbers;
}