/* fn02.js

리턴(return) 함수: 함수 호출하고 리턴할 때 값과 함께 리턴하는 함수 
보이드(void) 함수: 함수 호출하고 리턴만 하는 함수
*/

function voidAdd(n1,n2) {
    let sum = n1 + n2;
    return; // 생략 가능 / 값이 리턴되는 순간 리턴함수가 됨?
    //console.log('voidAdd:', sum) <  
}

function returnAdd(n1,n2) {
    let sum = n1+ n2
    return sum; // 값과 함께 돌아가겠다를 명시해야 하기 때문에 생략 불가능 
}

const voidVal = voidAdd(10, 20); // 결국 값이 대입된 적 없이 출력 
voidAdd(10, 20 ); // void 함수는 외롭게 있어야 한다. 

const returnVal = returnAdd(10, 20); // return 함수는 리턴값을 보통 저장한다. 

console.log('voidVal:', voidVal); 
console.log('returnVal:', returnVal); 