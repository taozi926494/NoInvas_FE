<template>
  <div class="card-section">
    <StatisCard iconclass="el-icon-s-platform" name="采集平台数量" value="1" />
    <StatisCard iconclass="el-icon-s-promotion" iconcolor="#44A9F8" name="API数量" value="1" />
    <StatisCard iconclass="el-icon-s-operation" iconcolor="#4CCCC9" name="API调用次数" value="10" />
    <StatisCard iconclass="el-icon-s-platform" iconcolor="#42B983" name="API调用次数" value="10" />
  </div>
</template>

<style lang="scss" scoped>
  .card-section {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
</style>

<script>
import StatisCard from '@/components/statis-card/index.vue'
export default {
  components: {
    StatisCard
  }
}
</script>