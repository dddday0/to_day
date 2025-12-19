/* for2.js
중첩 for문 (for in for)
시계(시간/분/초 관계)

*/

for(let h=0; h<6; h++) {
    for(let m=0; m<30; m++) {
        for(let s=0; s<30;s++) {
        console.log(`${h}:${m}:${s}`);
    }
}
}

// m이 29번까지 돌면  -> h가 1 증가하면서 작동?
// m이 다시 29번까지 돌고 // 이 작업을 5번 
