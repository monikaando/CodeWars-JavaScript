// 7 kyu
// Alternate capitalization
// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

// The input will be a lowercase string with no spaces.

// Good luck!

function capitalize(s){
  let a=[];
  let b=[];
  for(i=0; i<s.length; i++){
    if (i%2==0){
      a.push(s[i].toUpperCase())
    }
    else{
      a.push(s[i].toLowerCase())
    }
  }
  for(j=0; j<s.length; j++){
    if (j%2!==0){
      b.push(s[j].toUpperCase())
    }
    else{
      b.push(s[j].toLowerCase())
    }
  }
  return [a.join(""), b.join("")];
};

console.log(capitalize("abcdef"))
////['AbCdEf', 'aBcDeF']