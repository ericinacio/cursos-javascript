// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date
// DATE
const data1 = new Date();
const data2 = new Date('March 06 2019 09:30');
const data3 = new Date(2019,2,6,9,30);

console.log(data3.toDateString())
console.log(data3.toTimeString())
console.log(data3.toISOString())