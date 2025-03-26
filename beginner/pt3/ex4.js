/*write a javascript program to get the largest even number from an array of integer */

const largestEvenNumber = (array) => {
  return Math.max(...array.filter(num => num % 2 === 0))
}

console.log(largestEvenNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
console.log(largestEvenNumber([22,10,7,85,33]))

const numeroParMaior = (array) =>  {
  return Math.max(...array.filter(numero => numero % 2 === 0))
}

console.log(numeroParMaior([1,2,3,4,5,6,7,8,9,10]))
console.log(numeroParMaior([44,1,4,8,13]))


const maiorPar = (array) => {
  return Math.max(...array.filter(n => n % 2 ===0))
}

console.log(maiorPar([1,2,3,4,5,6,7,8,9,10]))
console.log(maiorPar([44,112,41,83,13]))
