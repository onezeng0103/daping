<template>
  <div class="box">
    <div class="title">30天流量趋势</div>
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
      top: -2,
      right: 0,
      itemGap: 25,
      textStyle: {
        color: '#5D87D5'
      },
      data: ['流入', '流出']
    },
    grid: {
      top: 15,
      bottom: 0,
      left: 10,
      right: 10,
      containLabel: true
    },
    xAxis: {
      type: 'category',
      data: ['01', '02', '03', '04', '05', '06'],
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
        max: 1500,
        interval: 500
      }
    ],
    series: [
      {
        name: '流入',
        type: 'line',
        // 填充颜色设置
        areaStyle: {
          color: new eCharts.graphic.LinearGradient(
            0,
            0,
            0,
            1,
            [
              {
                offset: 0,
                color: 'rgba(253, 190, 93,.4)' // 渐变色的起始颜色
              },
              {
                offset: 0.9,
                color: 'rgba(253, 190, 93,0)' // 渐变线的结束颜色
              }
            ],
            false
          ),
          shadowColor: 'rgba(0, 0, 0, 0.1)'
        },
        // 开始不显示拐点， 鼠标经过显示
        showSymbol: false,
        // 设置拐点颜色以及边框
        itemStyle: {
          color: 'rgba(253, 190, 93, 1)'
        },
        symbolClip: true,
        data: [600, 1200, 1000, 900, 800, 1000],
        smooth: true // 设置为 true，使折线图变得平滑
      },
      {
        name: '流出',
        type: 'line',
        // 填充颜色设置
        areaStyle: {
          color: new eCharts.graphic.LinearGradient(
            0,
            0,
            0,
            1,
            [
              {
                offset: 0,
                color: 'rgba(46, 193, 147, 0.20)' // 渐变色的起始颜色
              },
              {
                offset: 0.9,
                color: 'rgba(253, 190, 93,0)' // 渐变线的结束颜色
              }
            ],
            false
          ),
          shadowColor: 'rgba(0, 0, 0, 0.1)'
        },
        // 开始不显示拐点， 鼠标经过显示
        showSymbol: false,
        // 设置拐点颜色以及边框
        itemStyle: {
          color: 'rgba(46, 193, 147, 1)'
        },
        symbolClip: true,
        data: [400, 1000, 800, 700, 600, 800],
        smooth: true // 设置为 true，使折线图变得平滑
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
    width: 100%;
    box-sizing: border-box;
    height: calc(100% - 30px);
    padding: 10px 0;

    .chart {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
