/* fn05.js
화살표 함수(Arrow Function)

function 키워드를 쓰는 문법이 ES5까지 문법
화살표 함수는 ES6 이후에 나온 문법 

*/

function sum(n1, n2) {
    console.log('sum:', n1+ n2);
}

const sum2 = function( n1, n2) {
    console.log('sum2:', n1 + n2);
}

sum(40, 50);
// 정의 방법이 기존과 달라진다. 
const arrowSum= (n1, n2 ) => {  
    console.log('arrowSum:', n1 + n2);
}
//호출 방법은 똑같다.
arrowSum(40, 50);

/* 
화살표 함수는 A. ()를 생략할 수 있는 조건이 있는데, 파라미터가 1개일 때만 가능하다. 
            B. {}를 생략할 수 있는 조건이 있는데, 코드가 1줄일 때 가능하다. 
            C. (리턴 함수를 정의할 때 {}생략하면 return 키워드도 생략가능하다.)      
*/

function pow(num) {
    console.log('pow:', num * num );
}
pow(10);
// A, B 상황만 적용
const pow2 = num => console.log('pow:', num * num );
pow2(10);

console.log('--------------A, B, C 상황')
function returnPow(num) {
    return num * num;
}
const returnPow2 = num => num * num; // return 함수 
const returnPow3 = num => { num * num; } // void 함수. 계산만 하고 돌려 주는 값이 없기에 결과값이 undefined
const returnPow4 = num => { return num * num; } // return 함수. 중괄호 들어가는 순간 return이 들어가야 함.

console.log('returnPow(20);', returnPow(20));
console.log('returnPow2(20);', returnPow2(20));
console.log('returnPow3(20);', returnPow3(20));
console.log('returnPow4(20);', returnPow4(20));