/* cb03.js 배열의 filter, 배열에서 필요한 아이템들만 쏙 뽑아서
새로운 배열을 만들 때 사용. 원본과 길이는 다를 수 있다.
*/

const arr = [3, 88, 76, 9, 34, 65];

//const oddArr =arr.filter(item => item % 2 === 1 );
const oddArr = arr.filter( (item) => { // filter 리턴 함수, 함수 메소드 앞에 호출했기 때문에 = 을 붙임
    return item % 2 === 1;
}); 
console.log(oddArr); // 홀수만 뽑아서 
console.log(arr);