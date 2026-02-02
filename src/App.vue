<script setup>
import { RouterLink, RouterView } from 'vue-router'
import WriteMod from './views/WriteMod.vue';
import PracticeDetail from './views/PracticeDetail.vue';

</script>

<template>
  <div>
    <router-link to="/detail">detail</router-link>
    <router-link to="/write">글쓰기</router-link>
  </div>
  <RouterView />
</template>