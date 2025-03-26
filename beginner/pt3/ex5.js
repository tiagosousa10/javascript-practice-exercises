/*write a javascript program to replace the first digit in a string (should contains at least digit) with $ character */

const replaceFirstDigit = (string) => string.replace(/[0-9]/, '$')

console.log(replaceFirstDigit('abc123'))
console.log(replaceFirstDigit('abcdefgggggggg4'))


const trocaPrimeiroNumero = (string) => {
  return string.replace(/[0-9]/, '@')
}

console.log(trocaPrimeiroNumero('jdwj2dwadwa321'))


const firstDigit = (string) => {
  return string.replace(/[0-9]/, '#')
}

console.log(firstDigit('ola eu s0u o t1ago'))
