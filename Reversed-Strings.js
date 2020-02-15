//8kyu
//Reversed Strings
// Complete the solution so that it reverses the string value passed into it.
//solution('world'); // returns 'dlrow'

function solution(str) {
  return Array.from(String(str))
    .reverse()
    .join("");
}
