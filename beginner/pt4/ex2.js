/*write a javascript program to compare two objects to determine if the first one contains the same properties as the second one (which may also have additional properties) */

const objA = {a: 1 ,b:2, c:1}
const objB = {a: 1 ,b:1, d:1}
const objC = {a: 1 ,c:2, d:2}


const objectsEqual = (a,b) => {
  return Object.keys(a).every(key => b[key])  //every retorna true se todos os elementos forem true
}

console.log(objectsEqual(objA, objB))
console.log(objectsEqual(objA, objC))
console.log(objectsEqual(objC, objB))

//---------------------------------------------------------

const objecto1 = {a: 1, b:2, c:3}
const objecto2 = {a: 1, d:2, c:3}
const objecto3 = {c: 1, d:2, e:3}

const verificaObjetos = (obj1,obj2) => {
  return Object.keys(obj1).every(key => obj2[key])
}

//---------------------------------------------------------


const o1 = {name:"tiago", age: 28, job:"developer"}
const o2 = {name:"tiago", age: 35, job:"doctor"}
const o3 = {name:"tiago", age: 28, job:"developer"}


const comparaObjetos = (objeto1 , objeto2) => {
  return Object.keys(objeto1).every(label => objeto2[label])
}

console.log(comparaObjetos(o1,o2))
console.log(comparaObjetos(o1,o3))
