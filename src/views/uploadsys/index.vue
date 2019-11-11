<template>
  <div class="uploadapi">
    <div class="title">基本设置</div>
    <div class="basic-panel">
      <el-form ref="form" :model="form" label-width="150px" label-position="right">
        <div class="form-row">
          <el-form-item label="系统id:" prop="sys_id" :required="true">
            <el-input v-model="form.sys_id"></el-input>
          </el-form-item>

          <el-form-item label="系统名称" prop="sys_name" :required="true">
            <el-input v-model="form.sys_name"></el-input>
          </el-form-item>
        </div>

        <div class="form-row">
          <el-form-item label="系统描述" prop="sys_desc">
            <el-input v-model="form.sys_desc"></el-input>
          </el-form-item>

          <el-form-item label="系统图片" prop="sys_img" :required="true">
            <el-input v-model="form.sys_img"></el-input>
          </el-form-item>
        </div>

        <el-button @click="submit">提交</el-button>
      </el-form>
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
import request from '@/apiv1/base'
export default {
  data() {
    return {
      fileList: [],
      plat_list: ["重庆市发改委", "贵阳市民政局"],
      api_path_list: [
        {
          value: "选项1",
          label: "重庆市发改委"
        },
        {
          value: "选项2",
          label: "贵阳市民政局",
          children: [
            {
              value: "denglu",
              label: "登录"
            },
            {
              value: "duanxinyanzheng",
              label: "短信验证"
            }
          ]
        }
      ],
      api_type_list: ["通用"],
      application_type_list: ["重庆市发改委", "贵阳市民政局"],
      api_status_list: ["未发布", "已发布"],
      request_method_list: ["GET", "POST", "PUT"],
      request_type_list: ["json", "raw", "form", "file"],
      reponse_type_list: ["json", "raw", "form", "file"],
      submit_type_list: ["payload"],
      form: {
        sys_id: null,
        sys_name: null,
        sys_desc: null,
        sys_img: null
      }
    };
  },
  methods: {
    // 文件状态改变时的钩子
    fileChange(file, fileList) {
      var flag = false;
      for (const i of fileList) {
        if (i.name === file.raw.name) {
          flag = true;
        }
      }
      if (!flag) {
        fileList.push({ name: file.raw.name });
      }
      this.form.files.push(file.raw);
    },
    submit() {
      request.post('/admin/system', this.form).then((res) => {
        this.$message.success(res.message)
      })
    }
  }
};
</script>

