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
        <strong>{{ apiList.length }}</strong>
        条
      </span>
    </div>
    <div class="card-section">
      <el-card
        shadow="always"
        v-for="item in apiList"
        :key="item.api_id"
        @click.native="goDetailinfo(item.api_id)"
      >
        <h3>{{ item.api_name }}</h3>
        <div class="brief">
          <p>
            <i class="el-icon-s-promotion"></i>
            <strong>类型：</strong>
            <span>{{ item.driver_type }}</span>
          </p>
          <p>
            <i class="el-icon-s-opportunity"></i>
            <strong>状态：</strong>
            <span>{{ item.using_status }}</span>
          </p>
          <p>
            <i class="el-icon-date"></i>
            <strong>更新时间：</strong>
            <span>{{ item.update_time }}</span>
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
      form: {},
      apiList: []
    };
  },
  mounted() {
    this.$request
      .get(`/admin/system/${this.$route.params.sys_id}`).then(res => {
        this.apiList = res.data.api_list
      })
  },
  methods: {
    goDetailinfo(api_id) {
      this.$router.push({
        path: `${window.document.location.pathname}/api/${api_id}`
      });
    }
  }
};
</script>>

<style lang="scss">
.detailContents {
  background: white;
  height: 100%;
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

