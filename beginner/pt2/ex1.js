/* write a javascript program to create a new string from a given string taking the first 3 characters and the last 3 characters of a given string and adding the middle character between the first and last characters.*/

const makeNewString = (str) => 
  str.length < 3 ? str : str.slice(0,3) + str.slice(-3)

console.log(makeNewString('abc'))
console.log(makeNewString('abcdef'))
console.log(makeNewString('abc321kdwadaww'))


