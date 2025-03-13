/*write a javascript program to check two numbers and return true if one of the number is 100 or if their sum is 100 */

const isEqualTo100 = (a,b) => {
  if(a === 100 || b === 100 || a+b === 100) return true; 
  else {
    return false;
  } 
} 

console.log(isEqualTo100(100,0))
console.log(isEqualTo100(50,30))
console.log(isEqualTo100(70,30))

//-------------------------------------

const igualA50 = (n1,n2) => {
  if(n1 === 50 || n2 === 50 || n1 + n2 === 50) return true;
  else return false;
}

const isEqualTo10 = (numero1, numero2) => {
  if(numero1 === 10 || numero2 === 10 || numero1 + numero2 === 10) return true;
  else return false;
}
