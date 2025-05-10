/* 
  write a javascript function to extract unique characters from a string
*/

const getUniqueChars = (string) => {
  return string.split('').filter((item, index, array) => 
    array.slice(index + 1).indexOf(item) === -1
  )
}

const getUniqueChars2 = (str) =>
  [...new Set(str.split(''))]; // set is a collection of unique values


console.log(getUniqueChars('tiiaggooo'))
console.log(getUniqueChars2('wadaaaaddddvccc'))
