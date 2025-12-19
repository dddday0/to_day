/* continue_break_mission2.js
*/

//1~10 오름차순으로 세로로 숫자를 출력
// 3의 배수는 건너뛰고, 8이 되면 반복 종료

for( let i=1; i<11; i++) {
    if( i % 3 === 0) { continue; }
        else if(i===8) { break; }
    
    console.log(i);
}

// 1 2 4 5 7
