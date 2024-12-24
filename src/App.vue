<template>
  <div id="main">
    <div style="height: 70px;">
      <Top />
    </div>
    <div style="display: flex;align-items: center;justify-content: space-between;padding: 0 15px;">
      <div style="display: flex;flex-direction:column;width: 400px;height: calc(100vh - 75px);">
        <div style="display:flex;flex:1;margin-bottom:16px;">
          <OutletFlowCapacity style="flex:1;" />
        </div>
        <div style="flex:1;">
          <EgressBandwidthUsage />
        </div>
        <div style="flex:1;margin-top:16px;">
          <OrderStatistics />
        </div>
      </div>
      <div style="flex:1;height: calc(100vh - 75px);position: relative;">
        <Center />
      </div>
      <div style="display: flex;flex-direction:column;width: 400px;height: calc(100vh - 75px);">
        <div style="display:flex;flex:1;margin-bottom:16px;">
          <FlowPeak style="flex:1;" />
        </div>
        <div style="flex:1;">
          <flowTrend />
        </div>
        <div style="flex:1;margin-top:16px;">
          <FlowOverLimit />
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>
<script setup lang="ts">
import Top from '@/components/top.vue'
import OutletFlowCapacity from '@/components/outletFlowCapacity.vue'
import EgressBandwidthUsage from '@/components/egressBandwidthUsage.vue'
import OrderStatistics from '@/components/orderStatistics.vue'
import FlowPeak from '@/components/flowPeak.vue'
import flowTrend from '@/components/flowTrend.vue'
import FlowOverLimit from '@/components/flowOverLimit.vue'
import Center from '@/components/center.vue'
import Footer from '@/components/footer.vue'
</script>
