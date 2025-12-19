/* if_mission.js


score 값이 90 이상이면 "A"출력
80 이상이면 "B"출력
70 이상이면 "C"출력
60 이상이면 "D"출력
60 미만이면 "F"출력

*/

//const score = ??; // 20~100 사이 랜덤값
const score= parseInt(Math.random()*81)+20
console.log(score);

if (score >=90) {
    console.log("A");
} else if (score >=80) {
    console.log("B");
} else if (score >=70) {
    console.log("C");
} else if (score >= 60) {
    console.log("D");
} else { 
    console.log("F");
}


