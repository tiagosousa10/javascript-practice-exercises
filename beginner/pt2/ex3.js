/* write a program to concatenate two strings except their first characters*/

const concatenar = (frase1,frase2) => {
  return frase1.slice(1) + frase2.slice(1)
}


console.log(concatenar('ola eu sou o tiago', 'developer'))
