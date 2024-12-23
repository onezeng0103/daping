<template>
  <div id="main">
    <Top />
    <Main />
    <Footer />
  </div>
</template>
<script setup lang="ts">
import Top from '@/components/top.vue'
import Main from './components/main.vue'
import Footer from '@/components/footer.vue'
// import autofit from 'autofit.js'
onMounted(() => {
  // autofit.init({
  //   dh: 1080,
  //   dw: 1920,
  //   el: '#app',
  //   resize: true
  // })
})
</script>
