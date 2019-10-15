<template>
  <div class="apimanager">
    <div class="card-section">
      <el-card
        v-for="(item, index) in Data"
        :key="index"
        shadow="always"
        :body-style="{ border: 'azure solid 1px' }"
        @click.native="goDetail(item.name)"
      >
        <h3>{{ item.name }}</h3>
        <div class="brief">
          <p>
            <strong>API数量：</strong>
            <span>{{ item.accessedAPINumber }}</span>
          </p>
          <p>
            <strong>更新时间：</strong>
            <span>{{ item.update }}</span>
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
      Data: [
        {
          name: "河南科技信息管理系统",
          accessedAPINumber: 1,
          update: "2019-10-14 11:12:62"
        },
        {
          name: "河南税务系统",
          accessedAPINumber: 2,
          update: "2019-10-14 11:12:62"
        },
        {
          name: "河南工商系统",
          accessedAPINumber: 3,
          update: "2019-10-14 11:12:62"
        },
        {
          name: "河南工商系统",
          accessedAPINumber: 4,
          update: "2019-10-14 11:12:62"
        },
        {
          name: "河南工商系统",
          accessedAPINumber: 5,
          update: "2019-10-14 11:12:62"
        },
        {
          name: "河南工商系统",
          accessedAPINumber: 6,
          update: "2019-10-14 11:12:62"
        },
        {
          name: "河南工商系统",
          accessedAPINumber: 7,
          update: "2019-10-14 11:12:62"
        },
        {
          name: "河南工商系统",
          accessedAPINumber: 8,
          update: "2019-10-14 11:12:62"
        },
        {
          name: "河南工商系统",
          accessedAPINumber: 9,
          update: "2019-10-14 11:12:62"
        },
        {
          name: "河南工商系统",
          accessedAPINumber: 10,
          update: "2019-10-14 11:12:62"
        }
      ]
    };
  },
  methods: {
    goDetail(name) {
      console.log(name);
      this.$router.push(`/apimanager/${name}`);
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