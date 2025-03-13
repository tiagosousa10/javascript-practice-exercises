/* write a javascript program to get the extension of a filename.*/

const getFileExtension = (filename) => filename = filename.slice(filename.lastIndexOf("."))

console.log(getFileExtension("index.js"))
console.log(getFileExtension("webpack.config.ts"))
