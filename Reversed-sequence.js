// 8 kyu
// Reversed sequence
// Get the number n (n>0) to return the reversed sequence from n to 1.
// Example : n=5 >> [5,4,3,2,1]

const reverseSeq = n => {
  var i = 1;
  var array = [];
  while (i <= n) {
    array.push(i);
    i++;
  }
  return array.reverse();
};
console.log(reverseSeq(5));
