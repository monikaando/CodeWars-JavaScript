// 7 kyu
// Shortest Word
// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

function findShort(s){
for (let i=0; i<s.length; i++){
  let array = s.split(' ').map(a => a.length)
  return Math.min.apply(Math,array)
}
return array
}