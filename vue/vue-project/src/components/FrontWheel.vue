<script setup>
    import Tire from '@/components/Tire.vue';
    const page = 'history';
</script>

<template>
    <div class="front-wheel">
        <span :id="page">FRONT WHEEL</span> <!--:id 앞에 v 바인딩 생략가능  :id="" 그냥 문자열이 아니다 -->
        <tire color="BLUE"/>
    </div>
</template>

<style scoped>
#history { text-decoration: underline; }
.front-wheel {
    border: 1px solid black;
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:  center;
    width: 150px;
    height: 150px;
}
</style>

