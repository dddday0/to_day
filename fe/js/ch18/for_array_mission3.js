/* for_array_mission3.js
배열에 있는 값들을 홀수는 홀수대로, 짝수는 짝수대로, 모두 더하여 출력
*/
/*
const arr = [ 3, 8, 11, 86, 43, 22, 27 ];

let sum=0;
let sum2=0;
for(let i=0; i<arr.length; i++) { //모든 방을 다 접근해야 하기 때문에
    if( arr[i] % 2==0) {
        sum += arr[i]
    } else {
        sum2 += arr[i]
    }
}
    console.log(sum) 
    console.log(sum2) 

*/
    const arr = [ 3, 8, 11, 86, 43, 22, 27 ]; 
    const result = [0, 0];
    const resultStr = ['짝수', '홀수'];
    
    for(let i=0; i<arr.length; i++) {
        const item = arr[i]; // let을 써도 상관없으나, const가 안 변하는 성질?이기에 const를 쓰는 것이 안전
        result[item % 2] += item; // const가 for문안에 
    }
    
    for(let i=0; i<result.length; i++) {
        console.log(`${resultStr[i]}: ${result[i]}`);
    }
