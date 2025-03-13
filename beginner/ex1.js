/*write a javascript program to check two numbers and return true if one of the number is 50 or if their sum is 50 */

const isEqualTo100 = (a,b) => {
  if(a === 100 || b === 100 || a+b === 100) return true; 
  else {
    return false;
  } 
} 

console.log(isEqualTo100(100,0))
console.log(isEqualTo100(50,30))
console.log(isEqualTo100(70,30))
