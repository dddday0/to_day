<script setup>
import { onMounted, reactive } from 'vue';
import { useRouter } from 'vue-router';
import httpService from '@/services/httpService';

const router = useRouter();

const state = reactive({
    list:[]
});

onMounted(async () => {
    const data = await httpService.findAll();
    state.list =data;
});

const moveToDetail = id => {
    router.push({
        path: `/detail/${id}`
    });
}

</script>

<template>
<h3>게시판 목록</h3>
<table>
    <tr v-if="state.list.length>0">
        <th>번호</th>
        <th>제목</th>
        <th>작성일</th>
    </tr>
    <span v-else>작성된 글이 없습니다.</span>
    
        <tr v-for="item in state.list" :key="item.id" @click="moveToDetail(item.id)">
        <td>{{ item.id}}</td>
        <td>{{ item.title }}</td>
        <td>{{ item.createdAt }}</td>
        </tr>
        
</table>

</template>

<style scoped>
table { border: 1px solid rgb(0, 0, 0);
        border-collapse: collapse;
        background-color: rgb(243, 243, 235);}
th, td {border: 1px solid rgb(0, 0, 0);
        padding: 0.5rem;}
td{ text-align: center;
    cursor: pointer;
}
tr:hover{
    background-color: lightyellow;
    color: brown;
}

tr:first-child{
    color:black;
    background-color: beige;
    cursor: default;
    
}


</style>