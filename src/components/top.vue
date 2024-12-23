<template>
  <div class="title">
    <div class="left">
      <img src="@/assets/images/logo.png" alt="" />
      <div class="left_text">深智城集团</div>
    </div>
    <h1 class="text">国资超高速智能专网统一互联网出口</h1>
    <div class="right">2024-12-18 星期三 12:00:00</div>
  </div>
</template>
<style lang="scss" scoped>
.title {
  position: relative;
  width: 100%;
  height: 80px;
  display: flex;
  background-image: url('../assets/images/headline.png');
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
  .left {
    display: flex;
    align-content: center;
    margin-top: 10px;
    margin-left: 14px;
    img {
      width: 43.2px;
      height: 30px;
      margin-top: 4px;
    }
    &_text {
      font-size: 30px;
      color: #fff;
      margin-left: 10px;
    }
  }
  .text {
    position: absolute;
    top: 41%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 40px;
    font-weight: 400;
    color: #fff;
    font-family: YouSheBiaoTiHei-Bold;
  }
  .right {
    color: #c4d9ff;
    font-size: 16px;
    margin-left: auto;
    margin-top: 10px;
    margin-right: 14px;
  }
}
</style>
