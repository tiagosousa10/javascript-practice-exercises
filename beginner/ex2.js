/* write a javascript program to get the extension of a filename.*/

const getFileExtension = (filename) => filename.slice(filename.lastIndexOf("."))

console.log(getFileExtension("index.js"))
console.log(getFileExtension("webpack.config.ts"))

const obterExtensao = (ficheiro) => {
  ficheiro = ficheiro.slice(ficheiro.lastIndexOf("."))
  return ficheiro
}

console.log(obterExtensao("index.php"))
