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
td {cursor: pointer;}
</style>