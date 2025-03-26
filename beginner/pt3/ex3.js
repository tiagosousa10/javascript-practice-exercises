/*write a javascript program to check whether a given array of integers is sorted in ascending order */

const isAscending = (array) => {
  for( let i = 0; i < array.length ; i+= 1) {
    if(array[i + 1] < array[i]) return false;
  }
  return true;
}

console.log(isAscending([1,6,3,5,7,7]))
console.log(isAscending([1,2,3,4,5]))

const ordemCrescente = (array) => {
  for(let i = 0; i < array.length; i ++) {
    if(array[i +1] < array[i]) return false 
  }
  return true
}

console.log(ordemCrescente([5,3,2,1]))
console.log(ordemCrescente([12,15,13]))


const ordemDecrescente = (array) => {
  for(let i = 0; i < array.length; i++) {
    if(array[i + 1] > array[i]) return false
  }
  return true
}

console.log(ordemDecrescente([5,4,33,2,1]))
console.log(ordemDecrescente([5,4,3,2,1]))
