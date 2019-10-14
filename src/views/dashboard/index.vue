<template>
  <div>
    <div class="card-section">
      <StatisCard iconclass="el-icon-s-platform" name="采集平台数量" :value="16" />
      <StatisCard iconclass="el-icon-s-promotion" iconcolor="#44A9F8" name="API数量" :value="100" />
      <StatisCard iconclass="el-icon-s-operation" iconcolor="#4CCCC9" name="API调用次数" :value="300" />
      <StatisCard iconclass="el-icon-s-marketing" iconcolor="#42B983" name="本周API调用次数" :value="100" />
    </div>

    <div class="chart-section">
      <div id="useapi_chart" class="chart">

      </div>
      <div id="useplat_chart" class="chart">

      </div>
    </div>
    <div class="chart-section">
      <div id="hot_meap" class="chart">

      </div>
      <div id="uploadapi_chart" class="chart">

      </div>
    </div>
  </div>
 
</template>

<style lang="scss" scoped>
  .card-section {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  .chart-section {
    width: 100%;
    display: flex;
    justify-content: space-between;
    .chart {
      flex: 1;
      margin-top: 20px;
      height: 300px;
    }
  }
</style>

<script>
import { useplat_data, hot_data, useapi_data, uploadapi_data } from './data'
import StatisCard from '@/components/statis-card/index.vue'
import echarts from 'echarts'
export default {
  components: {
    StatisCard,
    echarts
  },
  mounted() {
    this.drawColumnChart('useapi_chart', useapi_data);
    this.drawColumnChart('useplat_chart', useplat_data);
    this.drawColumnChart('hot_meap', hot_data);
    this.drawColumnChart('uploadapi_chart', uploadapi_data);
  },
  methods: {
    drawColumnChart(id, data) {
      const chart = echarts.init(document.getElementById(id))
      chart.setOption(data)
    }
  }
}
</script>