<template>
  <div class="box">
    <div class="title">出口带宽使用率</div>
    <div class="main">
      <div class="left">
        <p>35,343.00</p>
        <p>已用带宽(GB)</p>
      </div>
      <div ref="chart" class="chart"></div>
      <div class="right">
        <p>10,671.00</p>
        <p>剩余带宽(GB)</p>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import * as eCharts from 'echarts'
const chartRef = useTemplateRef<HTMLInputElement>('chart')
onMounted(() => {
  const chart = eCharts.init(chartRef.value)
  const option = {
    title: {
      text: '65,343',
      subtext: '总接入',
      left: 'center',
      top: 'center',
      textStyle: {
        color: '#ffffff',
        fontSize: 24,
        fontWeight: 'bold',
        fontFamily: 'YouSheBiaoTiHei-Bold'
      },
      subtextStyle: {
        fontSize: 14,
        color: '#C4D9FF',
        fontFamily: 'Source-Han-Sans-Bold'
      }
    },
    series: [
      {
        name: 'Outer Ring',
        type: 'gauge',
        startAngle: 90,
        endAngle: -270,
        radius: '100%',
        splitNumber: 50,
        axisLine: {
          lineStyle: {
            width: 8,
            color: [
              [
                0.5,
                {
                  type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [
                    {
                      offset: 0,
                      color: '#182947' // 蓝色
                    },
                    {
                      offset: 1,
                      color: '#f8ae02' // 黄色
                    }
                  ],
                  global: false
                }
              ],
              [
                1,
                {
                  type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [
                    {
                      offset: 0,
                      color: '#3173ee' // 蓝色
                    },
                    {
                      offset: 1,
                      color: '#182947' // 黄色
                    }
                  ],
                  global: false
                }
              ]
            ]
          }
        },
        pointer: {
          show: false
        },
        axisTick: {
          show: false
        },
        splitLine: {
          show: false
        },
        axisLabel: {
          show: false
        },
        detail: {
          show: false
        }
      }
    ]
  }
  chart.setOption(option)
  window.addEventListener('resize', function () {
    chart.resize()
  })
})
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
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0px 12px;
    height: calc(100% - 30px);
    width: 100%;

    .left {
      position: absolute;
      left: 20px;
      width: 167.43px;
      height: 139px;
      background-image: url('../assets/images/annularLeft.png');
      background-repeat: no-repeat;
      background-size: 100% 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding-right: 20px;

      & p:nth-child(1) {
        color: #3275f1;
        font-family: Source Han Sans CN-Bold;
        font-size: 22px;
      }

      & p:nth-child(2) {
        margin-top: 9px;
        color: #798395;
        font-family: Source-Han-Sans-Regular;
        font-size: 14px;
      }
    }

    .chart {
      margin-top: 0px;
      margin-left: 20px;
      width: 140px;
      height: 140px;
    }

    .right {
      position: absolute;
      right: 0px;
      width: 167.43px;
      height: 139px;
      background-image: url('../assets/images/annularRight.png');
      background-repeat: no-repeat;
      background-size: 100% 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding-left: 20px;

      & p:nth-child(1) {
        color: #d1a134;
        font-family: Source Han Sans CN-Bold;
        font-size: 22px;
      }

      & p:nth-child(2) {
        margin-top: 9px;
        color: #798395;
        font-family: Source-Han-Sans-Regular;
        font-size: 14px;
      }
    }
  }
}
</style>
