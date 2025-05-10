/* 
  write a javascript function that accepts a string as a parameter and counts the number of vowels(a, e, i, o, u) in the string.
*/

const countLetters = (string, letters = ['a', 'e', 'i', 'o', 'u']) => {
  return string
    .split('')
    .filter(s => letters.indexOf(s) > -1 )
    .length;
}

console.log(countLetters('tiago'))
console.log(countLetters('abcde', ['b']))
