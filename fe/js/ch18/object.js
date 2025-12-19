/* object.js
자바스크립트에서 객체를 만드는 방법

객체는 속성, 메소드(Method)로 이루어질 수 있다.
key(키): 값(value 속성값 or 함수 (fuction))
객체 안에 있는 함수가 메소드
밖에 띨롱 있으면 함수 

person1에 저장되는 값은 객체의 주소값 하나임

객체의 주소값을 알면 속성값 읽기/쓰기, 메소드 호출할 수 있다.
주소값. -> 

let을 쓰면 다른 주소값을 쓸 수 있다.
*/

const person1 = { 
    name: '김철수3',
    age:25,
    married: false,
    run: function() { console.log('나는 뛴다');
}};
const person2 = person1; //shallow copy (얇은 복사, 주소값 복사)
console.log('person1.name:', person1.name);
console.log('person2.name:', person1.name);
person1.name = '홍길동';
person1.age = 30; // <-속성값을 바꾼 것
console.log('person1.name:', person1.name);
console.log('person2.name:', person1.name);
console.log('person1.age:', person1.age);
console.log('person2.age:', person1.age);

// 객체 자체를 복사하는 것은 deep copy (깊은 복사, 객체 복사)
const person3 = {
    name: '김철수',
    age: 25,
    married: false
}
//동등성, 동일성

