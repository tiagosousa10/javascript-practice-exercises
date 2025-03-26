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

const contaPares = (arrayNumeros) => {
  return arrayNumeros.filter(num => num % 2 === 0).length
}

const criarArrayDeNumeros = (numero) => {
  const lista = [];
  for(let i = 0; i <= numero; i++){
    lista.push(i)
  }

  return lista;
}

console.log(contaPares(criarArrayDeNumeros(13)))
console.log(contaPares(criarArrayDeNumeros(5)))


const contaPares2 = (array) => {
 return array.filter(num => num % 2 === 0).length
}

const criaArray = (n) => {
  const arrayNumeros2 = [];
  for(let i = 0; i <= n ; i++) {
    arrayNumeros2.push(i)
  }

  return arrayNumeros2;
}

console.log(contaPares2(criaArray(8)))
