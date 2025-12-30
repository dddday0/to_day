<script setup>
let loading = true;

const fruits = [ 'apple', 'banana', 'pear' ];
</script>

<template>
    <h3>Page103</h3>
    <!-- v-if 디렉티브 -->
    <template v-if="loading">로딩 중 </template> <!--v-if false가 된다면 아예 문서에 존재가 없어짐.
    둘 중 하나만 문서에 들어감. 문서 안에 추가가 됨. -->
    <div v-else>로딩 완료</div>

    <div>{{ loading ? '로딩 중' : '로딩 완료' }}</div>

    <hr>
    <!--v- show 코드상으로는 들어가 있음  css로 안 보이게 하는 것? display none으로 처리 뷰포트에서 공간 차지 X -->
    <div v-show="!loading">show 로딩 완료</div> <!-- 빈번한 토글이 필요한 경우 v-show가 적합 -->
    <hr>
    <!-- v-for 사용할 때 주의사항이 있다. 항상 key 속성을 줘야 하며 유일한 값이어야 한다. 정확하게 구분이 되어 작동 잘 됨 -->
    <div v-for="(item, idx) in fruits" :key="idx">{{idx +1}}.{{ item }}</div>
</template>
    
<style scoped>

</style>