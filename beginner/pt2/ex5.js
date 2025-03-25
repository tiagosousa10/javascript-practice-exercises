/*write a javascript program to check a given string contains 2 to 4 occurences of a specified character */

const contaCaracteres = (string, caracter) => {
  return string.split('').filter(char => char === caracter).length
}

const contains2To4 = (string, caracter) => {
  return contaCaracteres(string, caracter) >= 2 && contaCaracteres(string,caracter) <=4
} 

console.log(contains2To4('tiagoaa', 'a'))
console.log(contains2To4('tiagoandre', 'i'))
console.log(contains2To4('tiagoo', 'o'))

