<template>
  <div class="api-info">
    <div class="title">
      <strong>{{ apiInfo.api_name }}</strong>
      <i class="el-icon-document"></i>
      <span class="time">更新时间: {{ apiInfo.update_time }}</span>
    </div>
    <!-- <div class="status">
        <el-tag v-for="(status, index) in apiInfo.status" :color="elTagColors[index % elTagColors.length]" size="small">{{ status }}</el-tag>
    </div> -->
    <div class="describe">
      <el-row class="row">
        <label>
          请求方式：
          <span>{{ apiInfo.requestType }}</span>
        </label>
        <label>
          提交方式：
          <span>{{ apiInfo.submitType }}</span>
        </label>
        <label>
          接口状态：
          <span>{{ apiInfo.running_status }}</span>
        </label>
      </el-row>
      <el-row class="row">
        <label>
          接口地址：
          <span>{{ apiInfo.api_url }}</span>
        </label>
      </el-row>
      <el-row class="row">
        <label>
          数据类型：
          <span>{{ apiInfo.dataType }}</span>
        </label>
        <label>
          响应类型：
          <span>{{ apiInfo.responseType }}</span>
        </label>
      </el-row>
      <el-row class="row">
        <label>
          接口描述：
          {{ apiInfo.interfaceDescribe }}
        </label>
      </el-row>
    </div>

    <div class="parameters">
      <strong>请求参数</strong>
      <div>
        <el-table
          border
          :data="apiInfo.requestParams"
          :header-cell-style="{background: 'snow', color: '#2c3e50'}"
          class="table"
        >
          <el-table-column prop="name" label="参数名称" width="200"></el-table-column>
          <el-table-column prop="required" label="是否必须" width="150"></el-table-column>
          <el-table-column prop="type" width="150" label="数据类型"></el-table-column>
          <el-table-column prop="default" width="200" label="默认值"></el-table-column>
          <el-table-column prop="describe" label="描述"></el-table-column>
          <el-table-column prop="referenceinterface" label="引用接口"></el-table-column>
        </el-table>
      </div>
    </div>

    <div class="parameters">
      <strong>响应数据</strong>
      <div>
        <el-table
          border
          :data="apiInfo.responseParams"
          :header-cell-style="{background: 'snow', color: '#2c3e50'}"
          class="table"
        >
          <el-table-column prop="name" label="参数名称" width="200"></el-table-column>
          <el-table-column prop="required" label="是否必须" width="150"></el-table-column>
          <el-table-column prop="type" width="150" label="数据类型"></el-table-column>
          <el-table-column prop="describe" label="描述"></el-table-column>
        </el-table>
      </div>
    </div>

    <div class="parameters">
      <strong>响应返回示例</strong>
      <a :href="apiInfo.spamplesAddress" target="_blank">数据示例</a>
    </div>
  </div>
</template>

<script>
import data from './data'
export default {
  data() {
    return {
      apiInfo: {
        name: "",
        time: "",
        status: [],
        requestType: "",
        submitType: "",
        interfaceStatus: "已发布",
        address: "",
        dataType: "JSON",
        responseType: "JSON",
        interfaceDescribe: "",
        requestParams: [],
        responseParams: [],
        spamplesAddress: ""
      },
      elTagColors: ['green', 'deepskyblue', 'lightsalmon']
    };
  },
  mounted: function() {
      // for (const item of data) {
      //     console.log(item.name,  this.$router.currentRoute.params.info)
      //     if (item.name == this.$router.currentRoute.params.info) {
      //         this.apiInfo = item;
      //         break;
      //     }
      // }
      this.$request.get(`/admin/api/${this.$route.params.sys_id}/${this.$route.params.api_id}`)
      .then(res => {
        this.apiInfo = res.data
        console.log(this.apiInfo)
      })
  },
  methods: {}
};
</script>
<style lang="scss" scoped>
.api-info {
  background-color: white;
  padding: 15px;
  height: 100%;
  width: 100%;
}
.title {
  width: 100%;
  display: inline-flex;
  font-size: 14px;
  align-items: flex-end;
  strong {
    font-weight: bolder;
    font: "黑体";
    font-size: 16px;
  }
  i {
    display: flex;
    color: blue;
    align-items: center;
    margin: 2px 20px 0px 20px;
    font-size: 20px;
  }
}
.status {
  display: flex;
  align-items: flex-start;
  margin: 10px 0px 10px 70px;
  span {
      margin-right: 10px;
      color: #ffffff;
  }
}
.describe {
  text-align: left;
  label {
    margin: 30px 0px 0px 70px;
    span {
      color: #0070b8;
    }
  }
  .row {
    margin: 15px 0px 10px 0px;
  }
}
.parameters {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: 14px;
  margin: 40px 0px 10px 15px;
  strong {
    font-weight: bolder;
    font: "黑体";
    font-size: 16px;
  }
  .table {
    margin: 20px 0px 0px 55px;
  }
  div {
    width: 98%;
  }
  a {
    margin: 30px 0px 0px 50px;
  }
}
</style>
