/* for_mission10.js
*/

const star =parseInt(Math.random()*5)+3; // 3~7 사이 랜덤값
console.log('star:',star)

let str2=''
for( let i=0; i<star; i++) {  
    str2 +='*'
    let str=''   
    for(let k=0; k<star-i-1;k++) {
        str +='_'  
    }  
    console.log(str+str2)
}





//예)5
//_____*
//____*
//__***
//_*
//*****

/*
for( let i=0; i<star; i++) {  
    let str=''   
    for(let k=0; k<star-i; k++)
    str +='*'
    console.log(str)
}
*/ // 역삼각형


