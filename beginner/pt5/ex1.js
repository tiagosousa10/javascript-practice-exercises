/* 
  write a javascript function that returns a passed string with letters in alphabetical order.
  example string: 'webmaster'
  expected output: 'abeemrstw'
*/

const alphabetical = (string) => {
  return string.split('').sort((a,b) => a > b ? 1 : -1).join('');
}

console.log(alphabetical('webmaster'));
console.log(alphabetical('javascript'));
