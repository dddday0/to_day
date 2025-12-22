/* fn_mission2.js

abs를 리턴함수로 만들고
콘솔에는 "절대값 : 리턴한 값" 출력

리턴값 10

"절대값:10" 
*/

function abs(num) { 
    return num < 0 ? -num : num;
} 

const result1 = abs(-10)
console.log("result1:", result1 ); //출력 2차 가공을 하고 싶다면 따로 변수선언 
//console.log("result1:", abs(-10)); // 출력만 하고 싶다면 result1 자리에 abs(-10) 넣어도 된다.




