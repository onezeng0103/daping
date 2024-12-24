<template>
  <div class="box">
    <div class="title">出口流量容量</div>
    <div class="main">
      <div class="item">
        <img src="@/assets/images/wifi.png"></img>
        <div class="name">总带宽(GB)</div>
        <div class="current">40,902.00</div>
      </div>
      <div class="item">
        <img src="@/assets/images/telecom.png"></img>
        <div class="name">电信带宽(GB)</div>
        <div class="current">25,671.00</div>
      </div>
      <div class="item">
        <img src="@/assets/images/move.png"></img>
        <div class="name">移动带宽(GB)</div>
        <div class="current">15,231.00</div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
</script>
<style lang="scss" scoped>
.box {
  width: 100%;
  background-image: url('../assets/images/box.png');
  background-repeat: no-repeat;
  background-size: 100% 100%;
  height: 100%;

  .title {
    width: 100%;
    height: 30px;
    padding-left: 33px;
    line-height: 30px;
    font-size: 20px;
    color: #fff;
    font-family: 'YouSheBiaoTiHei-Bold';
    background-image: url('../assets/images/box-title.png');
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }

  .main {
    padding: 0 10px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: calc(100% - 30px);
    /* margin-bottom: 16px; */

    .item {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;

      img {
        width: 56px;
        height: 56px;
      }

      .name {
        margin-top: 27px;
        font-size: 16px;
        color: #fff;
      }

      .current {
        margin-top: 12px;
        font-family: Source-Han-Sans-CN-Bold;
        font-size: 24px;
        color: #fff;
      }

    }
  }
}
</style>
