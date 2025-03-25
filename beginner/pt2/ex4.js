/*given two values, write a javascript program to find out which one is nearest to 100 */

const maisProximo100 = (a,b) => {
  return (100 - a) < (100 - b) ? a : b;

}

console.log(maisProximo100(30,45))
console.log(maisProximo100(50,33))
console.log(maisProximo100(73,74))

const nearest100 = (n1,n2) => {
  // 100 -10 = 90 < 100 - 20 = 80 || 90 < 80 = false 
  return (100 - n1) < (100 - n2) ? n1 : n2
}

console.log(nearest100(10,20))

const proximo100 = (numero1, numero2) => {
  return (100 - numero1) < (100 - numero2) ? numero1 : numero2
}
