<template>
  <div class="flex justify-between">
    <div>
      <OutletFlowCapacity />
      <EgressBandwidthUsage class="mt-16px" />
      <OrderStatistics class="mt-16px" />
    </div>
    <div class="flex-1 position-relative">
      <Center />
    </div>
    <div>
      <FlowPeak />
      <flowTrend class="mt-16px" />
      <FlowOverLimit class="mt-16px" />
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
