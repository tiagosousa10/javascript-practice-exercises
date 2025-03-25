/*write a javascript program to extract the first half of a string of even length  */

const firstHalf = (string) => string.slice(0, string.length / 2)


console.log(firstHalf('abcdef'))
console.log(firstHalf('tiago'))
console.log(firstHalf('futebol'))
console.log(firstHalf('abcdefdwadAA2131'))

const primeiraMetade = (frase) => {
  return frase.slice(0, frase.length / 2)
}
console.log(primeiraMetade('qualquer coisa'))

const fHalf = (str) => {
  return str.slice(0, str.length / 2)
}

console.log(fHalf('apenas um teste'))
