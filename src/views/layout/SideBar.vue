<template>
  <el-aside style="width: 140px;">
    <el-menu
      class="el-menu-vertical-demo side-bar"
      default-active="1"
      background-color="#fff"
      text-color="#686A76"
      active-text-color="#fff"
    >
      <router-link to="/dashboard">
        <el-menu-item index="1">
          <i class="el-icon-menu"></i>
          <span slot="title">仪表盘</span>
        </el-menu-item>
      </router-link>
      <router-link to="/apimanager">
        <el-menu-item index="2">
          <i class="el-icon-s-promotion"></i>
          <span slot="title">API管理</span>
        </el-menu-item>
      </router-link>
      <router-link to="/uploadapi">
        <el-menu-item index="3">
          <i class="el-icon-upload"></i>
          <span slot="title">上传API</span>
        </el-menu-item>
      </router-link>
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
  name: "SideBar"
};
</script>