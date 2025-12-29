<!--로직 담당-->
<script setup>
    import FrontWheel from '@/components/FrontWheel.vue';
    import RearWheel from '@/components/RearWheel.vue';
    const message = 'There';
    const message2 = {
        name: 'Kim',
        age: 20
    };
</script>

<!--화면 (View) 담당 -->
<template>
    <div> Hello {{ message2.name }}</div>
    <!-- 객체 주소값을 표시하면 안 된다! 이렇게 쓰는 경우는 없다. -->
    <div>Hello {{ message }}</div>
    <div>
        <span>Hello </span>
        <span v-text="message"></span>
        <!-- v로 시작하는 속성을 디렉티브라고 한다. vue 문법 -->
    </div>
    <front-wheel></front-wheel> <!--케밥 케이스 권장-->
    <RearWheel/>
</template>

<!--
컴포넌트(Component): 재사용 가능한 요소

쉽게 생각해 자동차 부품이라고 봐도 된다. @은 절대 주소
-->