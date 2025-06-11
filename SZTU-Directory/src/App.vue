<template>
  <div>
    <Header></Header>
    <router-view />
  </div>
  <!-- vue3中可以写多个根标签 -->
  <!-- <div>22</div> -->
</template>

<script lang="ts" setup>
  import Header from './components/Header.vue';
</script>

<style>
:root {
  --vueuse-safe-area-top: 0px !important;
  --vueuse-safe-area-right: 0px !important;
  --vueuse-safe-area-bottom: 0px !important;
  --vueuse-safe-area-left: 0px !important;
}

/* 确保body和html没有意外的边距 */
html, body {
  padding: 0;
  margin: 0;
}

#app {
  padding-top: 0 !important;
  margin-top: 0 !important;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>