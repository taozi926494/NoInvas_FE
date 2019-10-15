<template>
  <div class="uploadapi">
    <div class="title">基本设置</div>
    <div class="basic-panel">
      <el-form ref="form" :model="basic_form" label-width="150px" label-position="right">
        <div class="form-row">
          <el-form-item label="接口名称:" prop="api_name" :required="true">
            <el-input v-model="basic_form.api_name"></el-input>
          </el-form-item>

          <el-form-item class="version" label="版本号:" prop="api_number" :required="true">
            <el-input v-model="basic_form.api_number"></el-input>
          </el-form-item>
        </div>

        <div class="form-row">
          <el-form-item label="服务地址:" prop="api_address" :required="true">
            <el-input v-model="basic_form.api_address"></el-input>
          </el-form-item>

          <el-form-item label="访问路径:" prop="api_url" :required="true">
            <el-input v-model="basic_form.api_url"></el-input>
          </el-form-item>
        </div>

        <div class="form-row">
          <el-form-item class="select-item" label="所属项目:" prop="for_plat">
            <el-select v-model="basic_form.for_plat" size="medium">
              <el-option v-for="item in plat_list" :key="item" :label="item" :value="item"></el-option>
            </el-select>
          </el-form-item>

          <el-form-item class="select-item" label="接口目录:" prop="api_path">
            <el-cascader v-model="basic_form.api_path" :options="api_path_list" size="medium"></el-cascader>
          </el-form-item>
        </div>

        <div class="form-row">
          <el-form-item class="select-item" label="接口类别:" prop="api_type">
            <el-select v-model="basic_form.api_type" size="medium">
              <el-option v-for="item in api_type_list" :key="item" :label="item" :value="item"></el-option>
            </el-select>
          </el-form-item>

          <el-form-item class="select-item" label="应用分类:" prop="application_type">
            <el-select v-model="basic_form.application_type" size="medium">
              <el-option
                v-for="item in application_type_list"
                :key="item"
                :label="item"
                :value="item"
              ></el-option>
            </el-select>
          </el-form-item>

          <el-form-item class="select-item" label="接口状态:" prop="api_status">
            <el-select v-model="basic_form.api_status" size="medium">
              <el-option v-for="item in api_status_list" :key="item" :label="item" :value="item"></el-option>
            </el-select>
          </el-form-item>
        </div>

        <div class="form-row">
          <el-form-item class="select-item" label="请求方式:" prop="request_method">
            <el-select v-model="basic_form.request_method" size="medium">
              <el-option
                v-for="item in request_method_list"
                :key="item"
                :label="item"
                :value="item"
              ></el-option>
            </el-select>
          </el-form-item>

          <el-form-item class="select-item" label="请求数据类型:" prop="request_type">
            <el-select v-model="basic_form.request_type" size="medium">
              <el-option v-for="item in request_type_list" :key="item" :label="item" :value="item"></el-option>
            </el-select>
          </el-form-item>

          <el-form-item class="select-item" label="响应类型:" prop="reponse_type">
            <el-select v-model="basic_form.reponse_type" size="medium"> 
              <el-option v-for="item in reponse_type_list" :key="item" :label="item" :value="item"></el-option>
            </el-select>
          </el-form-item>

          <el-form-item class="select-item" label="提交方式:" prop="submit_type">
            <el-select v-model="basic_form.submit_type" size="medium">
              <el-option v-for="item in submit_type_list" :key="item" :label="item" :value="item"></el-option>
            </el-select>
          </el-form-item>
        </div>

        <el-form-item label="接口描述:" prop="api_describe">
          <el-input
            v-model="basic_form.api_describe"
          ></el-input>
        </el-form-item>
        <el-form-item label="上传工具包">
          <el-upload
            action="#"
            :on-change="fileChange"
            :file-list="fileList"
            :limit="1"
            multiple
            drag
          >
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">
              将文件拖到此处，或
              <em>点击上传</em>
            </div>
          </el-upload>
        </el-form-item>
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
      basic_form: {
        api_name: null,
        api_number: "V1",
        api_address: null,
        api_url: null,
        for_plat: null,
        api_path: null,
        api_type: "通用",
        application_type: null,
        api_status: "未发布",
        request_method: "GET",
        request_type: "json",
        reponse_type: "json",
        submit_type: "payload",
        api_describe: null
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
    }
  }
};
</script>

