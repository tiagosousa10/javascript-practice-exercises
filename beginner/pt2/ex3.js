/* write a program to concatenate two strings except their first characters*/

const concatenar = (frase1,frase2) => {
  return frase1.slice(1) + frase2.slice(1)
}


console.log(concatenar('ola eu sou o tiago', 'developer'))

const concatenate = (string1, string2) => {
  return string1.slice(1) + string2.slice(1)
}

console.log(concatenate('fui ao porto', 'developer'))


const removeFirstTwoAndConcatenate = (str1, str2) => {
  return str1.slice(2) + str2.slice(2)
}
developer
console.log(removeFirstAndConcatenate('mais um teste', 'ola eu sou o tiago'))
