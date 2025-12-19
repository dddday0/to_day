/* for_mission10.js
*/

const star =parseInt(Math.random()*5)+3; // 3~7 사이 랜덤값
console.log('star:',star)


for(let i=star; i>0; i--) {
    let str = '';
    for(let k=1; k<=star; k++) {
        str += k<i ? '_' : '*';        
    }
    console.log(str);
}

console.log('----------');

for(let i=1; i<=star; i++) {
    let str = '';
    for(let k=star; k>0; k--) {
        if(k>i) {
            str += '_';
        } else {
            str += '*';
        }
    }
    console.log(str);
}

//예)5
//_____*
//____**
//__***
//_*****
//*****

/*
for( let i=0; i<star; i++) {  
    let str=''   
    for(let k=0; k<star-i; k++)
    str +='*'
    console.log(str)
}
*/ // 역삼각형


