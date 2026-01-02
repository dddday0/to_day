<script setup>
import { onMounted, onUpdated, onUnmounted, reactive } from 'vue';
//화면에 마운트될 때 (화면에 표시될 때) 최초 1회 실행
// 보통 데이터를 가져오는 통신처리. 렌더링이 다 끝나고 실행 
onMounted( () => console.log('onMounted') );

//element랑 상관없이 최초 1회만 실행하고 싶으면
//여기(전역)에 작성하면 된다. (라이프사이클 훅 밖에 작성된 코드 영역)

// 화면이 갱신(변화) 될 때마다 실행이 된다.
// 다양하게 사용 가능 
onUpdated( () => console.log('onUpdated') );

//화면에서 사라지기 전에 최초 1회 실행 \
//뭔가 작성한 것이 있고 다시 이 화면으로 돌아왓을 때 작성된 것을
// 다시 작성하지 않도록 처리할 때. 
onUnmounted( () => console.log('onUnmounted') );
const state = reactive( {
    val:0
});
const increaseVal = () => state.val++;
</script>

<template>
<h3>Page129</h3>
<div>{{ state.val }}</div>
<div><button @click="increaseVal">증가</button></div>
</template>

<style scoped>

</style>