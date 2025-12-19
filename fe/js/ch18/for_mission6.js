/* for_mission6.js
구구단 2단~9단까지 출력


*/

/*
for( let i=2; i<=9 ;i++ ) { 
    for(let j=1; j<=9;j++) { 
        console.log(`${i}x${j}=${i*j}`)
    }  if(i<9) {
        console.log('---------')
    }
};
*/


let isFirst = true;
for( let i=2; i<=9 ;i++ ) { 
    if(isFirst) {
        isFirst =false
    } else {
        console.log('----------')
    }
    for(let j=1; j<=9;j++) { 
        console.log(`${i}x${j}=${i*j}`)
    }  
};