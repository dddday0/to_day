<script setup>
import { reactive, onMounted} from 'vue';
import { useRoute, useRouter } from 'vue-router';
import httpService from '@/services/httpService';

const router = useRouter();
const route = useRoute();

const state = reactive({
    practice: {
        id: 0,
        title: "",
        contents: "",
        createdAt:""
    }
});

const del = async () =>{
    if(!confirm("삭제하시겠습니까?")){
        return; 
    }

    const params = { id: state.practice.id }

    const result = await httpService.del(params)
    
    if(result === 1 ){
        router.push({
            path: "/home"
        });
    }

    }

onMounted(async() => {
    const id = route.params.id;
    state.practice = await httpService.findById(id);
})

</script>

<template>
<h3>세부사항</h3>
<div>번호: {{ state.practice.id}} </div>
<div>제목: {{ state.practice.title}} </div>
<div>내용: {{ state.practice.contents}} </div>
<div>작성일: {{ state.practice.createdAt}} </div>
<div>
<button v-on:click="del">삭제</button>
<button v-on:click="router.push(`/mod/${state.data.id}`)">수정</button>
</div>


</template>

<style scoped>

</style>
