<template>
  <div class="box">
    <div class="title">30天流量峰值</div>
    <div class="main">
      <div ref="chart" class="chart"></div>
    </div>
  </div>
</template>
<script setup lang="ts">
import * as eCharts from 'echarts'
const chartRef = useTemplateRef<HTMLInputElement>('chart')
onMounted(() => {
  const chart = eCharts.init(chartRef.value)
  const data = ['安居集团', '深圳大学', '深圳地铁', '深圳机场', '深业集团']
  const data1 = [1000, 800, 210, 680, 420]
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
      icon: 'circle',
      itemWidth: 10,
      itemHeight: 10,
      itemStyle: {
        color: '#44BEFF' // 设置图例标记的颜色
      },
      top: -0,
      right: 0,
      orient: 'horizontal',
      textStyle: {
        color: '#5D87D5'
      },
      data: ['流量']
    },
    grid: {
      top: 16,
      bottom: 0,
      left: 0,
      right: 0,
      containLabel: true
    },
    xAxis: {
      type: 'category',
      data,
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
    yAxis: [
      {
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
        max: 1200,
        interval: 300
      }
    ],
    series: [
      {
        name: '流量',
        type: 'pictorialBar',
        barCategoryGap: '40%',
        symbolClip: true,
        barWidth: '80px',
        symbol: 'path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z',
        itemStyle: {
          color: new eCharts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: 'rgba(0, 183, 255, 0.30)' },
            { offset: 1, color: 'rgba(0, 183, 255, 0)' }
          ]),
          emphasis: {
            color: new eCharts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: 'rgba(0, 183, 255, 1)' },
              { offset: 1, color: 'rgba(0, 183, 255, 0)' }
            ])
          }
        },
        data: data1
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
    height: calc(100% - 30px);
    width: 100%;
    padding: 10px 0;

    .chart {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
