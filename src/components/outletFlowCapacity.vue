<template>
      <Box title="出口流量容量">
      <template v-slot:main>
        <div class="main">
        <div class="item">
          <img class="w-56px h-56px" src="@/assets/images/wifi.png"></img>
          <div class="mt-27px font-size-16px color-#fff">总带宽(GB)</div>
          <div class="current">40,902.00</div>
        </div>
        <div class="item">
          <img class="w-56px h-56px" src="@/assets/images/telecom.png"></img>
          <div class="mt-27px font-size-16px color-#fff">电信带宽(GB)</div>
          <div class="current">25,671.00</div>
        </div>
        <div class="item">
          <img class="w-56px h-56px" src="@/assets/images/move.png"></img>
          <div class="mt-27px font-size-16px color-#fff">移动带宽(GB)</div>
          <div class="current">15,231.00</div>
        </div>
      </div>
      </template>
    </Box>
</template>
<script setup lang="ts">
import Box from './box.vue';
</script>
<style lang="scss" scoped>
  .main {
    padding: 47px 0 24px 0;
    display: flex;
    justify-content: space-around;
    .item {
      flex: 1;
      display: flex;
      flex-direction: column;
    align-items: center;
      .current{
        margin-top: 12px;
        font-family: Source-Han-Sans-CN-Bold;
        font-size: 24px;
        color: #fff;
  
      }
    }
  }
</style>