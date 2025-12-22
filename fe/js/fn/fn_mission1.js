/* fn_mission1.js*/
// 함수 정의

function abs (num) { // 최대한 원본은 건드리지 않기로 한다. num << 원본
    console.log(num < 0 ? -num : num);
}

function abs2(num) { 
    let val= num;   // 파라미터 값을 변경하고 싶다면 복사해서 사용한다. 원본은 보존한다 
    if( val < 0 ) { val = -val; } //val 변수로 원본 값 복사해서 사용 가능
    console.log(val);
}

// 함수 호출
abs(10); // 콘솔에 10 출력
abs(-20); // 콘솔에 20 출력




