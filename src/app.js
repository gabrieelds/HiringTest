const test1 = require('./test1');
const test2 = require('./test2');
const test3 = require('./test3');
const test4 = require('./test4');

//#region First test
console.log('Result of first test is:');
console.log(test1('aabcc', 'adcaa'));
console.log('\n')
//#endregion

//#region Second test
console.log('Result of second test is:');
console.log(test2(9, 00));
console.log('\n')
//#endregion

//#region Third test
console.log('Result of third test is:');
console.log(test3(1230));
console.log('\n')
//#endregion

//#region Fourth test
console.log('Result of fourth test is:');
test4(10);
//#endregion