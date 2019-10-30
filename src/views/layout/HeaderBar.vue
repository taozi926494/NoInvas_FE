<template>
  <el-header>
    <img :src="logo_img" />
    <span class="platform-name">中电数桥</span>
    <span class="platform-nickname">非侵入式数据采集平台</span>
  </el-header>
</template>

<style lang="scss" scoped>
header {
  display: flex;
  align-items: center;
  background-color: #2F333E;
  color: #ffffff;
  
  img {
    height: 30px;
  }
  .platform-name {
    font-size: 24px;
    font-weight: 700;
    padding-left: 10px;
  }
  .platform-nickname {
    font-size: 14px;
    margin-top: 5px;
    padding-left: 10px;
  }
}
</style>

<script>
import logo_img from "@/assets/logo.png";
export default {
  name: "HeaderBar",
  data() {
    return {
      logo_img: logo_img
    };
  }
};
</script>