<script setup>
let loading = true;

const fruits = [ 'apple', 'banana', 'pear' ];
</script>

<template>
    <h3>Page103</h3>
    <!-- v-if 디렉티브 -->
    <template v-if="loading">로딩 중 </template>
    <div v-else>로딩 완료</div>

    <div>{{ loading ? '로딩 중' : '로딩 완료' }}</div>

    <hr>

    <div v-show="loading">show 로딩 중</div>
    <div v-show="!loading">show 로딩 완료</div> <!-- 빈번한 토글이 필요한 경우 v-show가 적합 -->
    <hr>
    <!-- v-for 사용할 때 주의사항이 있다. 항상 key 속성을 줘야 하며 유일한 값이어야 한다. 정확하게 구분이 되어 작동 잘 됨 -->
    <div v-for="(item, idx) in fruits" :key="idx">{{idx +1}}.{{ item }}</div>
</template>
    
<style scoped>

</style>