/*write a javascript program to convert a comma-separated values (csv) string to a 2D array. A new line indicates a new row in the array 

  example:
  abc,def,ghi,
  jkl,mno,pqr
  stu,vwx,yz
*/

const parseCSV = (csvString) => 
  csvString.split('\n').map(row => row.split(',')); // ['abc,def,ghi', 'jkl,mno,pqr', 'stu,vwx,yz']

const string = `abc,def,ghi,
jkl,mno,pqr,
stu,vwx,yz`;

console.log(parseCSV(string));

//---------------------------------------------------------

const convertString = (string) => {
  return string.split('\n').map(elementRow => elementRow.split(','))
}

const str = `abc,def,ghi,
jkl,mno,pqr,
stu,vwx,yz`;

console.log(convertString(str))

//---------------------------------------------------------

const convertString2 = (string) => {
  return string.split('\n').map(row=> row.split(','))
}

const str2 = `dwadw,dwadw,dwadw,
dwadw,dwadw,dwadw,
dwadw,dwadw,dwadw`;

console.log(convertString2(str2))
