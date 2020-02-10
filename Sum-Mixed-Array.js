// 8 kyu
// Sum Mixed Array
// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.
// Return your answer as a number.
//example: ['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']

//longer solution
function sumMix(x) {
  let sum = 0;
  x.map(function(element) {
    sum += parseInt(element);
  });
  return sum;
}
console.log(sumMix([1, "4", 2]));

//shorter solution
function sumMix(x) {
  sum = 0;
  return x
    .map(element => parseInt(element))
    .reduce((sum, element) => sum + element);
}
console.log(sumMix([1, "4", 2]));
