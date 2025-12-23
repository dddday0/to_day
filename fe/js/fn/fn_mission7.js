/* fn_mission7.js */
// 함수 정의 

function sumArr(arr) {
    let sum =0;
    for(const item of arr) {
        sum += item;
    } return sum;
}



const arr = [10, 8, 4, 88, 65, 3, 99 ];
const sum = sumArr(arr); // 배열의 모든 값을 더한 값을 리턴하는 함수/ 277
console.log(sum);

// if(arr.length ===0 ) {return 0; }

