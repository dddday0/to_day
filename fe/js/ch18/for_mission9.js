/* for_mission9.js
*/

const star =parseInt(Math.random()*5)+3; // 3~7 사이 랜덤값
console.log('star:',star)

let str='' 
for( let i=0; i<star; i++) {  
    str +='*'
    console.log(str)
}


/*
for( let i=0; i<star; i++) {  
    let str=''   
    for(let k=0; k<star-i; k++)
    str +='*'
    console.log(str)
}
*/


