let num1 = 2;
let num2 = 3;

let num3 = num1-- * --num2; // 4 
// num1-- 읽기 먼저여서 2 , --num2 쓰기 먼저여서 3
// 2 * 2 => 4

console.log('num1:', num1); // 1
console.log('num2:', num2); // 2
console.log('num3:', num3); 

// toggle : 상태를 A <-> B 번갈아 바꾸는 것 