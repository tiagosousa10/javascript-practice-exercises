/*write a javascript program to find a number of even digits(digitos pares) in a an array of integers */

const countEventNumbers = (array) => {
  return array.filter(num => num % 2 === 0).length
}

console.log(countEventNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
console.log(countEventNumbers([2,2,2,2,2]))
console.log(countEventNumbers([ 3, 7, 8, 90, 100]))


const contaPares  = (arrayNumeros) => {
  return arrayNumeros.filter(n => n % 2 === 0).length
}

console.log(contaPares([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))

const contaPares2 = (array) => 
  array.filter(c => c % 2 === 0).length

console.log('numeros pares: ',contaPares2([3, 7, 8, 90, 100]))
