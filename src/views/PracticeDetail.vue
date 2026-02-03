<script setup>
import { reactive, onMounted} from 'vue';
import { useRoute, useRouter } from 'vue-router';
import httpService from '@/services/httpService';

const router = useRouter();
const route = useRoute();

const state = reactive({
    data: {
        id: 0,
        title: '',
        contents: '',
        createdAt: ''
    }
});

const del= async () => {
    if(!confirm("삭제하시겠습니까?")){
        return; 
    }
    const params = { id: state.data.id }

    const result = await httpService.dl(params);

    if(result === 1 ){
        router.push({
            path: "/home"
        });
    }
}

onMounted(async() => {
    const id = route.params.id;
    state.data = await httpService.findById(id);
})

</script>

<template>
<h3>세부사항</h3>

<div>번호: {{ state.data.id}} </div>
<div>제목: {{ state.data.title}} </div>
<div>작성일: {{ state.data.createdAt}} </div>
<div>내용: {{ state.data.contents}} </div>
<div>
    <button @click="del">삭제</button>
    <button @click="router.push(`/mod/${state.data.id}`)">수정</button>

</div>
</template>

<style scoped>
div{border: 1px solid black;
background-color:  rgb(243, 243, 235) ;}

</style>
