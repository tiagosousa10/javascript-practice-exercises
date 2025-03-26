/*write a javascript program to get the largest even number from an array of integer */

const largestEvenNumber = (array) => {
  return Math.max(...array.filter(num => num % 2 === 0))
}

console.log(largestEvenNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
console.log(largestEvenNumber([22,10,7,85,33]))
