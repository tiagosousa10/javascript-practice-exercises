/*write a javascript program to replace every character in a given string with the character following it in the alphabet */

//String.fromCharCode
//charCodeAt

const moveCharsForward = (string) => 
  string
    .split('') // ['a', 'b', 'c']
    .map(char => String.fromCharCode(char.charCodeAt(0) + 1)) // ['b', 'c', 'd']
    .join(''); // 'bcd'


console.log(moveCharsForward('abcd'))
