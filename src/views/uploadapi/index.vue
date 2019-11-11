<template>
  <div class="uploadapi">
    <div class="title">基本设置</div>
    <div class="basic-panel">
      <el-form ref="form" :model="form" label-width="150px" label-position="right">
        <div class="form-row">
          <el-form-item label="接口id:" prop="api_id" :required="true">
            <el-input v-model="form.api_id"></el-input>
          </el-form-item>

          <el-form-item label="接口名称:" prop="api_name" :required="true">
            <el-input v-model="form.api_name"></el-input>
          </el-form-item>
        </div>

        <div class="form-row">
          <el-form-item label="接口地址:" prop="api_url" :required="true">
            <el-input v-model="form.api_url"></el-input>
          </el-form-item>

          <el-form-item label="接口描述:" prop="api_desc" :required="true">
            <el-input v-model="form.api_desc"></el-input>
          </el-form-item>
        </div>

        <div class="form-row">
          <el-form-item class="select-item" label="所属系统:" prop="sys_id">
            <el-select v-model="form.sys_id" size="medium">
              <el-option v-for="item in sysList" :key="item.sys_id" :label="item.sys_name" :value="item.sys_id"></el-option>
            </el-select>
          </el-form-item>
        </div>

        <div class="form-row">
          <el-form-item class="select-item" label="驱动类型:" prop="driver_type">
            <el-select v-model="form.driver_type" size="medium">
              <el-option label="通用" :value="0"></el-option>
              <el-option label="浏览器" :value="1"></el-option>
            </el-select>
          </el-form-item>

          <el-form-item class="select-item" label="是否需要登录:" prop="login_require">
            <el-select v-model="form.login_require" size="medium">
              <el-option label="是" :value="1"></el-option>
              <el-option label="否" :value="0"></el-option>
            </el-select>
          </el-form-item>

          <el-form-item class="select-item" label="接口状态:" prop="using_status">
            <el-select v-model="form.using_status" size="medium">
              <el-option label="启用" :value="1"></el-option>
              <el-option label="未启用" :value="0"></el-option>
            </el-select>
          </el-form-item>
        </div>
        <div class="form-row">
          <el-form-item class="select-item" label="接口代码" prop="api_script">
            <textarea cols="100" rows="30" v-model="form.api_script"></textarea>
          </el-form-item>
        </div>
      </el-form>
      <el-button @click="submit">上传</el-button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.uploadapi {
  border: 1px solid #dddddd;
  background-color: #fff;
  width: 80%;
  padding: 10px;
  .title {
    line-height: 20px;
    margin-bottom: 10px;
    font-size: 18px;
    font-family: "SimHei";
    text-align: left;
    padding-left: 5px;
    border-left: 3px solid #2d8cf0;
  }

  .form-row {
    display: flex;

    .el-form-item {
      flex: 1;
    }
    .version {
      flex: none;
      width: 300px;
    }
    .select-item {
      flex: none;
      width: 300px;
    }
  }
}
</style>

<style>
.el-form-item__content {
  text-align: left;
}
</style>

<script>
export default {
  data() {
    return {
      sysList: [],
      form: {
        api_id: null,
        api_name: null,
        api_url: null,
        api_desc: null,
        sys_id: null,
        driver_type: 0,
        login_require: 0,
        using_status: 1,
        api_script: "",
      }
    };
  },
  mounted() {
    this.$request.get('/admin/system').then(res => {
      this.sysList = res.data
    })
  },
  methods: {
    submit() {
      this.$request.post('/admin/api', this.form).then(res => {
        this.$message.success(res.message)
      })
    }
  }
};
</script>

