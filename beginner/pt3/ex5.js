/*write a javascript program to replace the first digit in a string (should contains at least digit) with $ character */

const replaceFirstDigit = (string) => string.replace(/[0-9]/, '$')

console.log(replaceFirstDigit('abc123'))
console.log(replaceFirstDigit('abcdefgggggggg4'))
