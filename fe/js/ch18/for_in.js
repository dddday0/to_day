/* for_in.js 
객체가 가지고 있는 key(속성명)를 순차적으로 준다.
*/
const person1= {
    name2: '김철수', 
    age: 25,
    married: false
};

for(const key in person1 ) { // person1에 저장되어 있는 속성들이 
    console.log('key:', key);
}

//14번 줄 아래에 person1 객체가 가지고 있는 value 출력
console.log(person1.name);
console.log(person1.age);
console.log(person1.married);
console.log('-------------')
for(const key in person1) {
    console.log(person1[key]);  
}
