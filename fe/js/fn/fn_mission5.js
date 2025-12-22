/* fn_mission5.js


*/
// 함수 정의 
function printStarLine(num) {
    let str = ''
    for(let i =0; i<num; i++) {
        str += '*'
    }
    console.log(str)
}


//함수 호출
printStarLine(5);
// *****

printStarLine(3);
//***

console.log('----------square')

function printStarSquare(num) {
    for(let i=0; i<num; i++) {
        printStarLine(num); // <-- 다른 함수(재활용) 
    } 
}

printStarSquare(3); 
// ***
// ***
// ***

console.log('----------triangle')

function printStarTriangle(num) {
    for(let i=1; i<=num; i++) {
        printStarLine(i);
    }
}

printStarTriangle(5);
//*
//**
//***
//****
//***** 

printStarTriangle(3);
//*
//**
//***






