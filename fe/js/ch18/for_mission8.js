/* for_mission.js */


/* 5
*****
*****
*****
*****
*****
*/
const star =parseInt(Math.random()*5)+3; 
console.log('star:',star)
/*
for(let i=0; i<star; i++) {
    let str ='';
    for(let k=0; k<star; k++) {
    str += '*'
    } console.log(str);
};
/*  
    console.log('-------------')
    let str ='';
    for(let i=0; i<star;i++) {
        str += '*';
    } for(let i=0; i<star; i++) {
        console.log(str);
    }
*/
    console.log('-------------')

/*
    let str=''
for(let i=0; i<star; i++) {
    str += '*'
} console.log(str)


for(let i=0; i<star;i++) {
    console.log('*')
};
*/
//정사각형으로 찍는다고 생각해보기

let str=''
for(let i=0; i<star; i++) {
    str +='*'   
        console.log(str)
}
// 직삼각형