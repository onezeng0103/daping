<template>
  <div class="box">
    <div class="title">{{ title }}</div>
    <slot name="main"></slot>
  </div>
</template>
<script setup lang="ts">
defineProps({
  title: {
    type: String,
    default: ''
  }
})
</script>
<style lang="scss" scoped>
.box {
  width: 466px;
  background: url('../assets/images/box.png') 100% 100% no-repeat;
  .title {
    height: 40px;
    padding-left: 33px;
    line-height: 40px;
    font-size: 24px;
    color: #fff;
    font-family: 'YouSheBiaoTiHei-Bold';
    background: url('../assets/images/box-title.png') 100% 100%;
  }
  .main {
    padding: 47px 0 24px 0;
    display: flex;
    justify-content: space-around;
    .item {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      .current {
        margin-top: 12px;
        font-family: 'Source-Han-Sans-CN-Bold';
        font-size: 24px;
        color: #fff;
      }
    }
  }
}
</style>
