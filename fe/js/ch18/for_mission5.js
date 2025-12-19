/* for_mission5.js
*/
const dan = parseInt((Math.random())*8)+2 //2~9랜덤값
console.log('dan:', dan); //5

// 5x1=5
//...
//5x9=45

/*
for( let i=1; i<=9 ; i++ ) {
  console.log(`${dan}x ${i}=${dan * i}`);
};
*/

/*
for( let i=1; i<=9 ; i++ ) {
    console.log(i*5);
};
*/

for(let i=1; i<=9; i++) {
    if(i >=1 && i <=9) {
    console.log(`${i}x ${dan}=${dan * i}`);
}
}