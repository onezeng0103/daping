<template>
  <div class="content">
    <div class="flex flex-col">
      <OutletFlowCapacity class="h-250px" />
      <EgressBandwidthUsage class="mt-10px h-250px" />
      <OrderStatistics class="mt-10px flex-1" />
    </div>
    <div class="flex-1 position-relative">
      <Center />
    </div>
    <div class="flex flex-col">
      <FlowPeak class="h-240px" />
      <flowTrend class="mt-10px h-260px" />
      <FlowOverLimit class="mt-10px flex-1" />
    </div>
  </div>
</template>
<script setup lang="ts">
import OutletFlowCapacity from './outletFlowCapacity.vue'
import EgressBandwidthUsage from './egressBandwidthUsage.vue'
import OrderStatistics from './orderStatistics.vue'
import Center from './center.vue'
import FlowPeak from './flowPeak.vue'
import flowTrend from './flowTrend.vue'
import FlowOverLimit from './flowOverLimit.vue'
</script>
<style lang="scss" scoped>
.content {
  display: flex;
  justify-content: space-between;
  width: 100vw;
  height: calc(100vh - 80px);
  padding: 0px 14px;
}
</style>
