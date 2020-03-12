// 7 kyu
// Indexed capitalization
// Given a string and an array of integers representing indices, capitalize all letters at the given indices.

// For example:

// capitalize("abcdef",[1,2,5]) = "aBCdeF"
// capitalize("abcdef",[1,2,5,100]) = "aBCdeF". There is no index 100.
// The input will be a lowercase string with no spaces and an array of digits.

// Good luck!

function capitalize(s,arr){
  let big = s.split("");
    for(i=0; i<arr.length; i++){
    if(big[arr[i]]){
      big[arr[i]]= big[arr[i]].toUpperCase()
    }
    }
    big = big.join("")
return big
};

console.log(capitalize("abcdef",[1,2,5]))
//'aBCdeF'