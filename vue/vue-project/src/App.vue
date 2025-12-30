<script setup>
import { globalState } from '@/globalState';
</script>

<template>
  <div>
    <nav>
      <router-link v-for="item in globalState" :to="`${item}`" :key="item">{{ item }}</router-link>

    <!-- <router-link to="/component">Component</router-link>
      <router-link to="/page98">Page98</router-link>
      <router-link to="/page103">Page103</router-link>
      <router-link to="/page108">Page108</router-link>  path 값도 유일하게
      <router-link to="/page110">Page110</router-link>
      <router-link to="/mission01">mission01</router-link> -->
    </nav>
    <main>
      <router-view/>
    </main>
  </div>
</template>

<style scoped>
  nav > a {  display: inline-block; }

</style>