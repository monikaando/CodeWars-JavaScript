// 8 kyu
// Grasshopper - Grade book
// Grade book
// Complete the function so that it finds the mean of the three scores passed to it and returns the letter value associated with that grade.

// Numerical Score	Letter Grade
// 90 <= score <= 100	'A'
// 80 <= score < 90	'B'
// 70 <= score < 80	'C'
// 60 <= score < 70	'D'
// 0 <= score < 60	'F'
// Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.

function getGrade(s1, s2, s3){
  let med = (s1+s2+s3)/3;
  return (med >=90 && med <= 100) ? 'A' : (med >= 80 && med < 90) ? 'B' : (med >= 70 && med < 80) ? 'C' : (med >= 60 && med < 70) ? 'D' : 'F'
}