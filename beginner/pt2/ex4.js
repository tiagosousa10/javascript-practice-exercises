/*given two values, write a javascript program to find out which one is nearest to 100 */

const maisProximo100 = (a,b) => {
  return (100 - a) < (100 - b) ? a : b;

}

console.log(maisProximo100(30,45))
console.log(maisProximo100(50,33))
console.log(maisProximo100(73,74))
