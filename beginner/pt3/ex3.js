/*write a javascript program to check whether a given array of integers is sorted in ascending order */

const isAscending = (array) => {
  for( let i = 0; i < array.length ; i+= 1) {
    if(array[i + 1] < array[i]) return false;
  }
  return true;
}

console.log(isAscending([1,6,3,5,7,7]))
console.log(isAscending([1,2,3,4,5]))
