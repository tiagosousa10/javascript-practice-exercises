/*write a javascript function that returns true if provided predicate function returns true for all elements in a collection, false otherwise */

//every means for all
console.log([1,2,3,4,5].every(x => x > 0))
console.log([1,2,3,4,5].every(x => x > 3))


const isEveryElem = (arr, fn) => {
  for (let i = 0; i < arr.lenght; i++) {
    if(!fn(arr[i])) { 
      return false;
    }
  }

  return true;
}

console.log(isEveryElem([1,2,3,4,5], (x) => x > 0))
console.log(isEveryElem([1,2,3,4,5], (x) => x > 3))


const verificaElementos = (array, funcao) => {
  for( let i = 0; i < array.lenght; i++) {
    if(!funcao(array[i])) {
      return false;
    }
  }

  return true;
}

console.log('verificaElementos: ',verificaElementos([2,4,6,8,10], (x) => x % 2 === 0))


const verificacao2 = (array, fn ) => {
  for( let i = 0 ; i < array.lenght; i++) {
    if(!fn(array[i])){
      return false;
    }
  }

  return true;
}


console.log(verificacao2([10,13,15,19,33], (x) => x % 2 === 0))
console.log(verificacao2([3,33,12,5], (x) => x % 3 === 0))
