/*write a javascript program to generate a random hexadecimal color code */

const getRandomHexNumber = () => 
  //floor arredonda para baixo | random gera um numero aleatorio | toString(16) transforma em hexadecimal
  Math.floor(Math.random() * 16).toString(16)

// gera uma cor hexadecimal | concatena 6 vezes o getRandomHexNumber
const getRandomHexColor = () => '#' + Array.from({length: 6}).map(getRandomHexNumber).join('')

console.log("🚀 ~ getRandomHexColor:", getRandomHexColor())
console.log("🚀 ~ getRandomHexColor:", getRandomHexColor())
console.log("🚀 ~ getRandomHexColor:", getRandomHexColor())

//---------------------------------------------------------
const gerarRandom = () => {
  return Math.floor(Math.random() * 16).toString(16)
}
console.log("🚀 ~ gerarRandom ~ gerarRandom:", gerarRandom())

const gerarHexa= () => '#' + Array.from({length:6}).map(gerarRandom).join('')


console.log("🚀 ~ gerarHexa ~ gerarHexa:", gerarHexa())
//---------------------------------------------------------


const gRandom = () => Math.floor(Math.random() * 2).toString(16)
const gHexa = () => '$' + Array.from({length: 6}).map(gRandom).join('')

console.log("🚀 ~ gHexa:", gHexa())
