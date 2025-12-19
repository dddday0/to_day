/* equals.js

*/

const val1 = '10', val2 = 10;

console.log('val1 == val2:', (val1 == val2)); // 관계없이 같은 값으로 나옴 true 
console.log('val1 === val2:', (val1 === val2)); // 타입이 다른 순간 false가 뜸 , 문자열도 값도 같아야 함
console.log('val1 === \'10\':', (val1 === '10')); 
console.log("val1 === '10':", (val1 === '10')); //홑따옴표를 표현하고 싶을 때 쌍따옴표로 감싸면 됨
console.log('10 === val2:', (10 === val2));

// value1과 value2를 비교하였을 때 같은 값이면 true가 나오게끔하고 싶다면
console.log('parseInt(val1)) === val2:', parseInt(val1) ===  val2); // 형변환을 하면 됨
console.log('Number(val1)) === val2:', Number(val1) ===  val2); // val1을 숫자형으로 바꿔서 true가 나오게