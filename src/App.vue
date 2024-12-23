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
const resizeScreen = () => {
  const wWidth = window.innerWidth
  const wHeight = window.innerHeight
  const screenRule = wWidth / wHeight
  const designRule = 1920 / 1080
  const mainDom = document.getElementById('main') as HTMLImageElement
  let scale = 1
  if (screenRule < designRule) {
    scale = wWidth / 1920
  } else {
    scale = wHeight / 1080
  }
  mainDom.style.transform = `scale(${scale}) translate(-50%,-50%)`
}
onMounted(() => {
  resizeScreen()
  window.onresize = () => {
    resizeScreen()
  }
})
</script>
