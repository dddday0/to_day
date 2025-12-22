/* fn04.js
함수를 만들 때 function 키워드를 사용했다. 
자바스크립트에서 함수는 1급 객체
즉, 주소값을 가질 수 있다.
*/

//sum이라고 하는 변수에 함수 주소값이 저장되어 있는 것이다. 
function sum(n1, n2) {
    console.log('sum:', n1 + n2);
}

const con1 = sum; // 주소값 복사 증요한 개념 , sum이 가지고 있는 함수의 주소값을 con1에 복사한 것
// 그래서 con1도 같은 함수를 가리키며 호출할 수 있다.
con1(20, 30); 

console.log('1:', sum);
sum(10, 20);
sum ='abc';
console.log('2:', sum); 