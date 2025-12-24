/* cb03_mission01.js
arr 배열에서 70 이하 값들만 있는 새로운 배열을 만들어 주세요.
*/

const arr = [3, 88, 76, 9, 34, 65];

const star = arr.filter ((item) => {
    return item <= 70;
});

console.log(star)

//arr 배열에서 3, 88, 76, 9만 살린 새로운 배열을 만들어 주세요.
const arr3 = arr.filter( (item, idx)=> idx < 4); // idx 인덱스
console.log(arr3)