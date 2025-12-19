/* for_array_mission4.js
배열에서 가장 큰 값과 가장 작은 값을 찾아서 출력
*/
const arr = [ 3, 8, 11, 86, 43, 22, 27 ];
let max=arr[0];
let min=arr[0];
for(let i=1; i<arr.length; i++) {
    if(max < arr[i]) {
        max = arr[i]
    } else if(min > arr[i]) {
        min = arr[i]
    }
}

    console.log(max)
    console.log(min)
