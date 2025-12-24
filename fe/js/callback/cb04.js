/* cb04.js 배열의 map 함수, 새로운 배열을 만든다.
아이템 값을 변경할 수 있다. 대신 길이가 변하진 않는다. 
*/

const arr = [3, 88, 76, 9, 34, 65];

// 아이템 모두 +2 처리한 새로운 배열 생성 
//const arr2 = arr.map(item => item + 2 );
const arr2 = arr.map( item => { 
    return item + 2;
});
console.log(arr2);
console.log(arr);

// filter와 map만 새로운 배열을 만드는 게 목적
// forEach는 각 배열을 읽어와서 값을 꺼내서 순차적으로 처리하고 싶을 때/ 값을 읽어오는 게 목적 
// 셋다 원본을 수정하진 않는다.
