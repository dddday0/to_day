/* primitive_ref.js

프라머티브(일반 타입) vs 레퍼런스 타입 (참조타입(주소값));  실제 값이 아니라 주소값

*/

const changeNum = (n) => {
    n = 20;
}

let num = 10; 
changeNum(num); //changeNum 함수 호출하면서 num이 가지고 있는 값 전달

console.log('num:', num);

console.log('----------------------'); 
const changeBoxNum = (box) => {
    box = {
        num: 30  // 새 객체 생성, 변수가 가리키는 객체를 교체
    }
    box.num = 20; // 같은 객체를 수정
}

let box = {
    num: 10
};
console.log('box.num:', box.num);
changeBoxNum(box);
console.log('box.num:', box.num);