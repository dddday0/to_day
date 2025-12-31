import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
// 첫번째 argument: store 이름
// 두번째 argument: 콜백함수(store 동작을 정의했다.)
export const useCounterStore = defineStore('counter', () => {
    const count = ref(0);
    const doubleCount = computed( () => count.value * 2 );
    const increment = () => count.value++;
    const decrement = () => {
        if(count.value >0 )
            count.value--;
    } 
    //  const decrement = () => count.value > 0 && count.value--;
    return { count, doubleCount, increment, decrement };
});

/*
return { count, doubleCount, increment };

위 내용은 아래 내용과 같다.

return {
    'count': count,
    'doubleCount: doubleCount,
    'increment': increment
};

*/