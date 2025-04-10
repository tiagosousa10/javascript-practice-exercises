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
