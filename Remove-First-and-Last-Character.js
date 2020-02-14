//8 kyu
//Remove First and Last Character
// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

//Longer version
function removeChar(str){
    let array = Array.from(String(str)));
    let array2= array.pop(); 
    let array3= array.shift();
    let array4= array.join('')
    return array4;
    };
    console.log(removeChar('eloquent'))
    
    //Shorter version
    function removeChar(str){
      return str.slice(1, str.length - 1);
    };