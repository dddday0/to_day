<script setup>
const pop = message => alert(message); //alert 잘 안 씀 
const test = ()=> alert('테스트');
</script>

<template>
<h3>Page108</h3>
<button v-on:click="pop('Hello')">Hello</button>
<button @click="pop('안녕')">안녕</button>

<!-- 연결된 함수가 파라미터가 없다면 함수 이름만 적어도 된다. -->
<button @click="test">test</button>

<!-- 연결된 함수가 파라미터가 있는데 argument를 보내지 않으면 이벤트 객체가 넘어간다. -->
<button @click="pop">undefined</button>

</template>

<style scoped>

</style>