/* assign_operator.js
대입 연산자 
*/

let n1 = 10;
n1 = n1 + 5;
// 1) n1 = 10 + 5;
// 2) n1 = 15; 
console.log(' n1:', n1);


/* 변수에 들어 있는 값이 변경이 되려면 =(대입 연산자)를 이용하여 변경. 쓰기 연산자? 
유일하게 대입연산자 없이 숫자 변수의 값을 변경할 수 있는 연산자 증가연산자, 감소연산자 */ 

let n3 = 50;
n3++; // 증가연산자
++n3; // 증가연산자 
console.log(' n3:', n3);

--n3; //감소연산자
n3--; // 감소연산자
n3--; // 감소연산자
console.log(' n3:', n3);

let n4 =10;
let result4 = n4++; // 읽기 > 쓰기  작업 진행 중

let n5 = 10;
let result5 = ++n5; // 쓰기 > 읽기 작업 

console.log(' result4:', result4); // 10 읽기 먼저여서 반환값이 10
console.log(' result5:', result5); // 11 쓰기 우선이어서 반환값부터 
console.log(' n4:', n4); // 증가 작업이 완료되어  11 / 읽기
console.log(' n5:', n5); // 증가 작업이 완료되어 11  /읽기

console.log('-------------------------')
let n6 = 10;
n6++; // 쓰기
console.log( 'n6:', n6); // 읽기

let n7 = 10;
console.log('n7++:', n7++); // 10
console.log('n7', n7); // 10

let n8 = 10;
console.log('++n8:', ++n8);  // 11
console.log('n8:', n8);  // 11