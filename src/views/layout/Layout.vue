<template>
  <el-container style="height:100%; flex-direction: column;">
    <HeaderBar/>
    <el-container style="flex: 1;">
      <SideBar/>
      <el-container>
        <el-main style="background-color: #EEF5F9;">
          <router-view/>
        </el-main>
        <el-footer style="height: 30px; font-size: 12px; line-height: 30px; color: #888;">
          ©2019 提升政府治理能力大数据应用技术国家工程实验室
        </el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
import SideBar from './SideBar'
import HeaderBar from './HeaderBar'
export default {
  components: {
    HeaderBar,
    SideBar
  }
}
</script>