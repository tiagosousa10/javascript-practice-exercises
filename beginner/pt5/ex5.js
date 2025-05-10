/* 
  write a javacript function to find the first not repeat character
  example string : 'abacdwadaccecbb'
  expected output: 'e'

*/

const getNonRepeatedChars = (string) =>
  string.split('').filter((item, index, array) =>
  array.filter(arrayItem => arrayItem === item).length === 1) 


console.log(getNonRepeatedChars('abacdwadaccecbb'))
