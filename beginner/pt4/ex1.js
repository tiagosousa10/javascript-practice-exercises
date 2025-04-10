/* given a year, report if it is a leap year*/

const isLeapYear = (year) => year % 4 === 0;

console.log(isLeapYear(2013))
console.log(isLeapYear(2015))
console.log(isLeapYear(2016))
console.log(isLeapYear(2019))


const additionalYear = (y) => y % 4 === 0;
console.log("🚀 ~ additionalYear:", additionalYear(2000))
