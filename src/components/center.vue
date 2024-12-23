<template>
  <div>
    <div class="position-absolute top-110px left-330px text-center">
      <div class="text size40">2246</div>
      <div class="name size20">总带宽</div>
    </div>
    <div class="pedestal pedestal2 position-absolute bottom-380px left-70px">
      <div class="text">680万</div>
      <div class="name">光缆网（千米）</div>
    </div>
    <div class="pedestal pedestal2 position-absolute bottom-380px right-70px">
      <div class="text">252</div>
      <div class="name">带宽利用率百分比</div>
    </div>
    <div class="pedestal pedestal1 position-absolute bottom-270px left-0px">
      <div class="text">350</div>
      <div class="name">传输网电路（条）</div>
    </div>
    <div class="pedestal pedestal1 position-absolute bottom-270px right-0px">
      <div class="text">259</div>
      <div class="name">服务用户数</div>
    </div>
    <div class="pedestal pedestal2 position-absolute bottom-160px left-100px">
      <div class="text">465</div>
      <div class="name">数据网接入点（端口）</div>
    </div>
    <div class="pedestal pedestal2 position-absolute bottom-160px right-100px">
      <div class="text">500</div>
      <div class="name">本月、上月逾限告警</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.pedestal {
  display: flex;
  flex-direction: column;
  text-align: center;
  padding-top: 31px;
  width: 180px;
  height: 162px;
  animation: bounceZoom 2s infinite ease-in-out;
  background-size: cover !important;
}
.pedestal1 {
  background: url('../assets/images/pedestal1.png') 100% 100% no-repeat;
}
.pedestal2 {
  background: url('../assets/images/pedestal2.png') 100% 100% no-repeat;
}
.text {
  font-family: YouSheBiaoTiHei-Bold;
  font-size: 30px;
  font-weight: 400;
  color: #fff;
  margin-bottom: 10px;
}
.name {
  color: #b8d1ff;
  font-size: 14px;
  font-family: Source-Han-Sans-Medium;
}
.size40 {
  font-size: 40px;
}
.size20 {
  font-size: 20px;
}
@keyframes bounceZoom {
  0%,
  100% {
    transform: translateY(0) scale(1);
  }
  50% {
    transform: translateY(-10px) scale(1.1);
  }
}
</style>
