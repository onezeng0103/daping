<template>
  <Box title="出口带宽使用率">
    <template v-slot:main>
      <div class="main">
        <div class="left">
          <p>35,343.00</p>
          <p>已用带宽(GB)</p>
        </div>
        <div ref="chart" class="w-150px h-100%"></div>
        <div class="right">
          <p>10,671.00</p>
          <p>剩余带宽(GB)</p>
        </div>
      </div>
    </template>
  </Box>
</template>
<script setup lang="ts">
import Box from './box.vue'
import * as eCharts from 'echarts'
const chartRef = useTemplateRef<HTMLInputElement>('chart')
onMounted(() => {
  const chart = eCharts.init(chartRef.value)
  const option = {
    title: {
      text: '65,343',
      subtext: '总接入',
      left: 'center',
      top: '30%',
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
.main {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 0 20px 0;
  height: calc(100% - 40px);
  .left {
    position: absolute;
    top: 46px;
    left: 12px;
    width: 167.43px;
    height: 139px;
    background: url('../assets/images/annularLeft.png') 100% 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-right: 47px;
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
  .right {
    position: absolute;
    top: 46px;
    right: 12px;
    width: 167.43px;
    height: 139px;
    background: url('../assets/images/annularRight.png') 100% 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-left: 47px;
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
</style>
