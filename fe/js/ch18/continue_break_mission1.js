/* continue_break_mission.js
*/

//1~10 오름차순으로 세로로 숫자를 출력
// 짝수만 출력

for( let i=1; i<11; i++) {
    if(i % 2 == 1 )   {continue;}
    console.log(i)
}