/* write a javascript program to create a new string adding "New!" in front of a given string. If the string already begins with "New!" then return the original string.*/

const newString = (string) => 
  string.indexOf("New!") === 0 ? string: `New! ${string}` // index of to check if the string starts with "New!"

console.log(newString("Hello"))
