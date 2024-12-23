<template>
  <Box title="订单统计">
    <template v-slot:main>
      <div class="main">
        <div class="main_title">
          <img class="w-64px h-64px" src="@/assets/images/order.png" />
          <i>累计订单</i>
          <span>2,115.00 GB</span>
        </div>
        <div ref="chart" class="w-100% h-250px"></div>
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
    tooltip: {
      show: true,
      borderWidth: 0,
      trigger: 'axis',
      axisPointer: {
        type: 'none'
      },
      backgroundColor: '#1c3e7b',
      borderColor: '#1c3e7b',
      textStyle: {
        color: '#BAD3FF',
        fontSize: 14
      }
    },
    legend: {
      icon: 'rect',
      itemWidth: 10,
      itemHeight: 10,
      itemStyle: {
        color: '#13E1FD' // 设置图例标记的颜色
      },
      orient: 'horizontal',
      top: '0%',
      right: '0%',
      textStyle: {
        color: '#5D87D5'
      },
      data: ['订单量']
    },
    xAxis: {
      type: 'category',
      data: ['深智城集团', '安居集团', '深圳大学', '深业集团', '招商集团'],
      axisLabel: {
        fontSize: 14,
        color: '#5D87D5',
        interval: 0
      },
      axisTick: {
        show: false
      },
      axisLine: {
        lineStyle: {
          color: '#224C99'
        }
      }
    },
    yAxis: {
      type: 'value',
      name: '(GB)',
      nameLocation: 'end',
      nameTextStyle: {
        fontSize: 12,
        color: '#557cc5',
        align: 'right',
        padding: [0, 10, 0, 0]
      },
      axisLabel: {
        fontSize: 14,
        color: '#557cc5'
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: ['#17356b'],
          width: 1,
          type: 'dashed'
        }
      },
      min: 0,
      max: 1500,
      interval: 300
    },
    grid: {
      top: 30,
      x: 50,
      y: 20,
      x2: 5,
      y2: 50,
      borderWidth: 1
    },
    series: [
      {
        name: '订单量',
        data: [910, 800, 670, 400, 1100],
        type: 'bar',
        barWidth: '16px',
        showBackground: true,
        itemStyle: {
          color: new eCharts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: 'rgba(255,255,255, 0.9)' },
            { offset: 0.02, color: 'rgba(15, 93, 133,0.9)' },
            { offset: 1, color: 'rgba(15, 44, 97, 0.7)' }
          ]),
          emphasis: {
            color: new eCharts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: 'rgba(255,255,255, 1)' },
              { offset: 0.02, color: 'rgba(198, 248, 255,0.9)' },
              { offset: 1, color: 'rgba(16, 55, 106, 0.7)' }
            ])
          }
        },
        backgroundStyle: {
          color: '#0f2552'
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
  padding: 0 12px;
  &_title {
    background: url('../assets/images/order-bg.png') 100% 100% no-repeat;
    width: 443px;
    height: 64px;
    margin-top: 20px;
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    i {
      color: #e0ebff;
      font-size: 14px;
      margin-left: 27px;
      font-style: normal;
    }
    span {
      font-family: YouSheBiaoTiHei-Bold;
      font-size: 28px;
      color: #fff;
      margin-left: 100px;
    }
  }
}
</style>
