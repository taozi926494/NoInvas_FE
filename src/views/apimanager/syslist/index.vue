<template>
  <div class="apimanager">
    <div class="card-section">
      <el-card
        v-for="(item, index) in sysList"
        :key="index"
        shadow="always"
        :body-style="{ border: 'azure solid 1px' }"
        @click.native="goDetail(item.sys_id)"
      >
        <h3>{{ item.sys_name }}</h3>
        <div class="brief">
          <p>
            <strong>API数量：</strong>
            <span>{{ item.api_count }}</span>
          </p>
          <p>
            <strong>更新时间：</strong>
            <span>{{ item.update_time }}</span>
          </p>
        </div>
        <img src="@/assets/systemLogo.jpg" />
      </el-card>
    </div>
    <div class="page">
      <el-pagination background :page-size="10" layout="total, prev, pager, next" :total="40"></el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sysList: []
    };
  },
  mounted() {
    this.$request.get('/admin/system').then(res => {
      this.sysList = res.data
    })
  },
  methods: {
    goDetail(sys_id) {
      this.$router.push(`/apimanager/sys/${sys_id}`);
    }
  }
};
</script>

<style lang="scss" scoped>
.page {
  margin-top: 40px;
}
.card-section {
  display: inline-flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  .el-card {
    width: 350px;
    margin: 20px;
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
    img {
      width: 90px;
    }
  }
}
</style>