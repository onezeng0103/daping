<template>
  <div class="box">
    <div class="title">出口带宽使用率</div>
    <div class="main">
      <img src="@/assets/images/line.png" />
      <table>
        <thead>
          <tr>
            <th>序号</th>
            <th>单位名称</th>
            <th>告警名称</th>
            <th>时长</th>
            <th>日期</th>
          </tr>
        </thead>
        <tbody ref="scrollContent">
          <tr v-for="row in visibleData" :key="row.序号">
            <td>{{ row.序号 }}</td>
            <td>{{ row.单位名称 }}</td>
            <td>{{ row.告警名称 }}</td>
            <td>{{ row.时长 }}</td>
            <td>{{ row.日期 }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script setup lang="ts">
const tableData = ref([
  {
    序号: 1,
    单位名称: '单位1',
    告警名称: '告警1',
    时长: '2.5',
    日期: '2024-12-13'
  },
  {
    序号: 2,
    单位名称: '单位2',
    告警名称: '告警2',
    时长: '1.5',
    日期: '2024-12-12'
  },
  {
    序号: 3,
    单位名称: '单位3',
    告警名称: '告警3',
    时长: '1.0',
    日期: '2024-12-11'
  },
  {
    序号: 4,
    单位名称: '单位4',
    告警名称: '告警4',
    时长: '0.5',
    日期: '2024-12-10'
  },
  {
    序号: 5,
    单位名称: '单位5',
    告警名称: '告警5',
    时长: '3.5',
    日期: '2024-12-09'
  }
])
const scrollContent = useTemplateRef('scrollContent') as Ref<HTMLElement>
const visibleData: any = ref([...tableData.value])
onMounted(() => {
  const interval = setInterval(() => {
    // 移动第一个数据到末尾实现循环滚动
    const firstRow = visibleData.value.shift()
    visibleData.value.push(firstRow)
  }, 2000) // 每2秒滚动一行

  // 清除定时器防止内存泄漏
  scrollContent.value.addEventListener('mouseleave', () =>
    clearInterval(interval)
  )
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
    height: calc(100% - 30px);
    width: 100%;
    font-size: 14px;

    img {
      position: absolute;
      top: 40px;
    }

    table {
      display: block;
      cursor: pointer;
      width: 100%;
      height: 100%;
      border-collapse: collapse;
      border-width: 0px;
      box-sizing: border-box;
    }

    thead {
      color: #5d87d5;
      padding-bottom: 20px;

      th {
        padding: 10px;
      }
    }

    tbody {
      tr {
        &:nth-child(odd) {
          background-color: rgba(50, 117, 241, 0.2);
        }

        &:hover {
          background-color: #2a588c;
        }
      }

      td {
        text-align: center;
        padding: 10px;
        color: #ffffff;

        &:nth-child(1) {
          color: #5d87d5;
        }
      }
    }

    tbody tr:nth-child(odd) {
      background-color: #1f416e;
    }
  }
}
</style>
