<script setup>
// props 부모 컴포넌트로부터 데이터를 전달받고 싶을 때 사용 
const props = defineProps({
    color: String // 강제성은 없음 
    
}); // 보내는 방법, 받은 방법, 받은
</script>

<template>
    <div :style="{ color: props.color, backgroundColor: 'black' }">{{ props.color || 'BLACK' }} TIRE</div>
    
    <div style="color: blue; background-color: black;">blue TIRE</div>
</template>
<!--문자열에서 0만 false? 음수, 양수는 true? -->