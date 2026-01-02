const obj = {};

for(let i=1; i<=100; i++) {
    const temp ={
        id: i,
        name: `홍길동${i}`
    };
    obj[i] = temp;
}

console.log(obj);

const id20 =obj[20];
console.log(id20);
console.log(obj[25]);

//배열 아니고 객체