/* if/js
조건이 여러개인 경우,
if-elseif-else 는 결국 그룹이기 때문에 하나만 실행된다.
if-elseif는 하나도 실행이 안될수도 있다. 만약 실행된다면 하나만 실행된다.

if (식1) {
        식1이 true였다면 {} 부분이 모두 실행되고 if-elseif-else 그룹을 빠져나간다. 
        식1이 false였다면 {} 부분이 실행되지 않고 다음 식 else if(식2)로 넘어간다. 
} else if (식2) {
        식2이 true였다면 {} 부분이 모두 실행되고 if-elseif-else 그룹을 빠져나간다. 
        식2이 false였다면 {} 부분이 실행되지 않고 다음 식 else if(식3)로 넘어간다. 
} else if (식3) {

} else { 
        위에 있는 조건식들이 모두 false였다면 else {} 부분이 모두 실행된다.
}
*/

//const value = ??; // 1~10까지 랜덤값
const value = parseInt(Math.random()*10+1);
console.log('value:'+ value );
console.log(`value: ${value}`); // `백틱 ` 
console.log('value: ${value}');



if (value >=8 ) { //value 값이 8 이상이라면
    console.log(`${value}값은 8 이상이다`);
} else if ( value % 2 == 1 ) {  // value값이 홀수라면
    console.log(`${value}값은 홀수이다`);
} else {  // 8 미만의 짝수들
    console.log(`${value}값은 8 미만이면서 짝수이다`);
}

