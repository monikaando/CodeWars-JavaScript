//6kyu
//Number of anagrams in an array of words
// An anagram is a word, a phrase, or a sentence formed from another by rearranging its letters. An example of this is "angel", which is an anagram of "glean".

// Write a function that receives an array of words, and returns the total number of distinct pairs of anagramic words inside it.

// Some examples:

// There are 2 anagrams in the array ["dell", "ledl", "abc", "cba"]
// There are 7 anagrams in the array ["dell", "ledl", "abc", "cba", "bca", "bac"]
function anagramCounter(wordsArray) {
  function setWord(word) {
    return word
      .split("")
      .sort()
      .join("")
      .toLowerCase();
  }

  var counter = 0;
  for (var i = 0; i < wordsArray.length; i++) {
    for (var j = i + 1; j < wordsArray.length; j++) {
      if (setWord(wordsArray[i]) == setWord(wordsArray[j])) {
        counter++;
      }
    }
  }
  return counter;
}
