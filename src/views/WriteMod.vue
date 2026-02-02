<script setup>
import { reactive } from 'vue';
import { onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import httpService from '@/services/httpService';

const route = useRoute();
const router = useRouter();

const state = reactive({
    mode: '등록',
    practice: {
    id: 0,
    title: '',
    contents: ''
    }
});

const submit = async () => {
    if(!state.practice.title) {
    alert("제목을 입력해주세요")
    return;
} else if (!state.practice.contents) {
    alert("내용을 입력해주세요")
    return;
} 

const result = await (state.practice.id? upd(state.practice) : httpService.save(state.practice) )
if(!result){
    alert(`글등록에 실패하였습니다.`);
    return;
}
const path = state.state.id ? `/detail/${state.practice.id}` : '/home';
router.push(path);
}


onMounted(async () => {
    if(route.params.id){
        const id = route.params.id;
        state.practice = await httpService.findById(id) 
    }
});

</script>

<template>
<h3>글쓰기</h3>
<div>
<label  for = "title">제목</label>
<input v-model="state.practice.title"></input>
<label  for = "contents">내용</label>
<input v-model="state.practice.contents"></input>
<button @click="submit">등록</button>
</div>
</template>

<style scoped>

</style>