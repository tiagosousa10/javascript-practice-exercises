/*write a javascript program to find the number of even values up(até ao numero) to a given number */

const countEvenNumbers = (array) =>
  array.filter(num => num % 2 === 0).length;

const createArrayOfNumbers = (num) => {
  const returnArray = [];
  for(let i = 0; i <= num; i++) {
    returnArray.push(i)
  }

  return returnArray;
}

console.log(countEvenNumbers(createArrayOfNumbers(10)))
console.log(countEvenNumbers(createArrayOfNumbers(6)))
