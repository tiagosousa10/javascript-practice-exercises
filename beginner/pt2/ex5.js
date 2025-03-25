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


const conta = (frase, caracter) => {
  return frase.split('').filter(c => c === caracter).length
}

const entre2e4 = (frase, caracter) => {
  return conta(frase, caracter) >= 2 && conta(frase, caracter) <= 4
}

console.log(entre2e4('entre2e4','r'))


const count = (string, character) => {
  return string.split('').filter(char => char === character).length
}

const between2And4 = (string, character) => {
  return count(string, character) >= 1 && count(string, character) <=3
}

console.log(between2And4('andredmawmdmwamd', 'a'))
