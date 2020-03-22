// 7 kyu
// Lottery machine
// Your task is to write an update for a lottery machine. Its current version produces a sequence of random letters and integers (passed as a string to the function). Your code must filter out all letters and return unique integers as a string, in their order of first appearance. If there are no integers in the string return "One more run!"

// Examples
// "hPrBKWDH8yc6Lt5NQZWQ"  -->  "865"
// "ynMAisVpHEqpqHBqTrwH"  -->  "One more run!"
// "555"                   -->  "5"

function lottery(str){
  let nr = str.match(/[0-9]/g)
  if(nr){
    return Array.from(new Set(nr)).join('')
  }
  else {
    return "One more run!"
  }
}
console.log(lottery("wQHyy4oshQPeRC8kG"))
//48
