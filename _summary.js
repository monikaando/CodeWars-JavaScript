// parseInt() - zamienia string na integer(nr)
//.toString zamienia integer(nr) na string
// (Array.from(String(x), Number) - zamienia 1425 na [ 1, 4, 2, 5 ] (najpierw zamienia na string pottem na nr)

//Array.from(String(x) - zamienia "eloquent" w [ 'e', 'l', 'o', 'q', 'u', 'e', 'n', 't' ]

// sort() - sortuje od najmniejszej do najwiekszej liczby[1,2,4,5]
// numArray.sort((a, b) => a - b); // For ascending sort(numbers)
// numArray.sort((a, b) => b - a); // For descending sort(numbers)
// reverse() - odwraca kolejnosc [5,4,2,1]

// join('') zamienia array w liczbe [5,4,2,1] -->5421 string tez ['e', 'l', 'o'] -->elo

//arr1.concat(arr2) - laczy dwa arrays [1,2,3] + [4,5,6] --> [1,2,3,4,5,6]

//array.reduce((a, b) => a + b); dodaje wszystkie liczby w array [1,2,3,4,5,6] -->21
//ASCII code  ---> str.charCodeAt()
// funkcje w 1 linii
// const areaOrPerimeter = function(l , w) {
//     return l == w ? l*w : 2*(l + w)
//   };

//   //to to samo!//

//   const areaOrPerimeter = function(l , w) {
//   if(l==w){
//   return l*w
//   }
//   else {
//   return 2*l+2*w
//   }
//   };

//   var x = (day == "yes") ? "Good Day!" : (day == "no") ? "Good Night!" : "";               ({})?....: ({})?....:....

//odcinanie 2 nr z array od konca .slice(-2)

//
//FOR UNIQUE values in arays ( is returning an object)
// const array = [1, 2, 2, 3, 4];
// const uniqueArray = new Set(array); // {1, 2, 3, 4}
// const backToArray = [...uniqueArray]; // [1, 2, 3, 4]
//or
//Array.from(new Set(array)) / [1, 2, 3, 4]

//string.replace(/a|e|o|u/gi, "")  or (/[aeou]/gi,"")- method for replacing anything (here: a e o u) in a string (with big and small letters)
//string.replace(/a|e|o|u/g, "")  or (/[aeou]/g,"")- the same as above but only for small letters

//match(/../g) rozdziela po dwie litery (bo ..)"abcdef" --> ["ab", "cd", "ef"]

// const items = ['item1', 'item2', 'item3']
// const copy = []

// // before
// for (let i = 0; i < items.length; i++) {
//   copy.push(items[i])
// }

// // after
// items.forEach(function(item){
//   copy.push(item)
// })