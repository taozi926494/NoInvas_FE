<template>
  <div class="detailContents">
    <div class="filter">
      <el-form ref="form" :model="form" label-position="left">
        <el-form-item label="接口类型" size="small" class="formitem">
          <el-button type="primary" round class="firstbuttun">全部</el-button>
          <el-button round>文件上传</el-button>
          <el-button round>文件下载</el-button>
          <el-button round>登录</el-button>
          <el-button round>验证</el-button>
          <el-button round>查询</el-button>
        </el-form-item>

        <el-form-item label="接口状态" size="small" class="formitem">
          <el-button type="primary" round class="firstbuttun">全部</el-button>
          <el-button round>已发布</el-button>
          <el-button round>开发</el-button>
          <el-button round>无效</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="tips">
      <i class="el-icon-search"></i>
      <span>
        结果共计：
        <strong>8</strong>
        条
      </span>
    </div>
    <div class="card-section">
      <el-card shadow="always" v-for="item in items" :key="item.name">
        <h3>{{ item.name }}</h3>
        <div class="brief">
          <p>
            <i class="el-icon-s-promotion"></i>
            <strong>类型：</strong>
            <span>{{ item.type }}</span>
          </p>
          <p>
            <i class="el-icon-s-opportunity"></i>
            <strong>状态：</strong>
            <span>{{ item.status }}</span>
          </p>
          <p>
            <i class="el-icon-s-custom"></i>
            <strong>创建者：</strong>
            <span>{{ item.auth }}</span>
          </p>
          <p>
            <i class="el-icon-date"></i>
            <strong>更新时间：</strong>
            <span>{{ item.update }}</span>
          </p>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      items: [
        {
          name: "登录（验证系统）",
          type: "登录",
          update: "2019-10-14 15:55:22",
          status: "已发布",
          auth: "袁XX"
        },
        {
          name: "表单写入（验证系统）",
          type: "写入",
          update: "2019-10-14 15:55:22",
          status: "已发布",
          auth: "谢xx"
        },
        {
          name: "手机短信验证码",
          type: "短信验证码",
          update: "2019-10-14 15:55:22",
          status: "已发布",
          auth: "付xx"
        },
        {
          name: "登录",
          type: "登录",
          update: "2019-10-14 15:55:22",
          status: "已发布",
          auth: "孔xx"
        },
        {
          name: "企业待录入列表详情查询",
          type: "查询",
          update: "2019-10-14 15:55:22",
          status: "已发布",
          auth: "陈xx"
        },
        {
          name: "更新管理人员信息",
          type: "写入",
          update: "2019-10-14 15:55:22",
          status: "已发布",
          auth: "张山"
        },
        {
          name: "企业登记身份实名查验告知书",
          type: "查询",
          update: "2019-10-14 15:55:22",
          status: "失效",
          auth: "张山"
        },
        {
          name: "多证合一（非默认项）",
          type: "查询、写入",
          update: "2019-10-14 15:55:22",
          status: "开发",
          auth: "张山"
        }
      ]
    };
  }
};
</script>>

<style lang="scss">
.detailContents {
  background: white;
}
.filter {
  display: flex;
}
.formitem {
  display: flex;
  margin: 20px 0px 0px 20px;
}
.firstbuttun {
  margin-left: 20px;
}
.tips {
  display: flex;
  justify-items: center;
  align-items: center;
  margin: 0px 0px 20px 20px;
  span {
    margin-left: 10px;
  }
  strong {
    color: red;
  }
}
.card-section {
  display: inline-flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  .el-card {
    width: 350px;
    margin: 15px;
    cursor: pointer;
    h3 {
      margin-top: 0;
    }

    h3 {
      padding-bottom: 15px;
      border-bottom: 1px solid #aaa;
    }
    .brief {
      text-align: left;
      padding-left: 30px;
      i {
        margin-right: 10px;
        font-size: 20px;
        color: rgb(68, 169, 248);
      }
      span {
        color: #333;
        font-size: 15px;
      }
    }
  }
}
</style>

