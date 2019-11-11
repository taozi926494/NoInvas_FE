<template>
  <el-aside style="width: 140px;">
    <el-menu
      class="el-menu-vertical-demo side-bar"
      background-color="#fff"
      text-color="#686A76"
      active-text-color="#fff"
      router
      :default-active="defaultActive"
    >
      <el-menu-item index="/dashboard">
        <i class="el-icon-menu"></i>
        <span slot="title">仪表盘</span>
      </el-menu-item>

      <el-menu-item index="/apimanager">
        <i class="el-icon-s-promotion"></i>
        <span slot="title">API管理</span>
      </el-menu-item>

      <el-menu-item index="/uploadapi">
        <i class="el-icon-upload"></i>
        <span slot="title">上传API</span>
      </el-menu-item>

      <el-menu-item index="/uploadsys">
        <i class="el-icon-s-platform"></i>
        <span slot="title">新建系统</span>
      </el-menu-item>
    </el-menu>
  </el-aside>
</template>

<style lang="scss" scoped>
.side-bar {
  height: 100%;
  padding-top: 5px;
  overflow: hidden;
}
.is-active {
  background-color: rgb(43, 127, 192) !important;
}
</style>

<script>
export default {
  name: "SideBar",
  computed: {
    defaultActive() {
      return "/" + this.$route.path.split("/")[1];
    }
  }
};
</script>