/* if_mission2.js


score 값이 
98점 이상이면 "A+"출력
93~97점은 "A0"출력
90~92점은 "A-2"출력

88 이상이면 "B+"출력
83~87점은 "B0"출력
80~82점은 "B-"출력

78 이상이면 "C+"출력
73~77점은 "C0"출력
70~72점은 "C-"출력

68점 이상이면 "D+"출력
63~67점은 "D0"출력
60~62점은 "D-"출력

60 미만이면 "F"출력
*/


if (score >=90) {
    if (score >=98) {
        console.log("A+") 
    } else if (score >=93) {
        console.log("A0")
    } else {
        console.log("A-")
    }
}

else if (score >=80) {
    if (score >=88) {
        console.log("B+")
    } else if (score >=83) {
        console.log("B0")
    } else {
        console.log("B-")
    }
}

else if (score >=70) {
    if (score >=78) {
        console.log("C+")
    } else if (score >=73) {
        console.log("C0")
    } else {
        console.log("C-")
    }
} 

else if (score >= 60) {
    if (score >=68) {
        console.log("D+") 
    } else if (score >=63) {
        console.log("D0")
    } else {
        console.log("D-")
    }
} else { 
    console.log("F");
}


//const score = parseInt(Math.random() * 81.0) + 20; //20~100사이 랜덤값
//console.log('score:', score);
//let result = 'F';
/*
if( score >= 90 ) {
    result = 'A';
} else if( score >= 80 ) {
    result = 'B';
} else if( score >= 70 ) {
    result = 'C';
} else if( score >= 60 ) {
    result = 'D';
}
    */
//
//const score = parseInt(Math.random() * 81.0) + 20; //20~100사이 랜덤값
//console.log('score:', score);
let result = 'F';

if( score >= 90 ) {
    result = 'A';
} else if( score >= 80 ) {
    result = 'B';
} else if( score >= 70 ) {
    result = 'C';
} else if( score >= 60 ) {
    result = 'D';
}

if(score >= 60) {
    if (score == 100 || score % 10 >= 8) { result += '+'; } 
    else if (score % 10 >= 3) { result += '0'; }
    else if(score % 10 >= 0)  { result = result + '-';  } 
    // else { result = result + '-';  }
}

console.log(result);

/* else if (score >= 90) {
    console.log("A");
    if (score % 10 >= 8) { console.log("+"); }
    else if (score % 10 >= 3) { console.log("0"); }
    else if(score % 10 >= 0)  { console.log("-");  }
}
*/

// || or 조건