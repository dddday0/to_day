<script setup>
const routerList = [ 'component', 'page98', 'page103', 'page108', 'page110'
,'mission01'
];
</script>

<template>
  <div>
    <nav>
      <router-link v-for="item in routerList" :to="`${item}`" :key="item">{{ item }}</router-link>

    <!-- <router-link to="/component">컴포넌트</router-link>
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

</style>