<template>
  <div class="apimanager">
    <div class="content" v-for="(item, index) in Data" :key="index">
      <div class="cardList" @click="goDetail(item.name)">
        <el-card 
          shadow="always"
          :body-style="{ border: 'azure solid 1px' }"
          >
            <h3>{{ item.name }}</h3>
            <p>API数量：{{ item.accessedAPINumber }}</p>
            <p>更新时间：{{ item.update }}</p>
            <img src="./assets/contentListIcon_1.jpg">
        </el-card>
      </div>
    </div>
    <div class="page">
      <el-pagination
        background
        @current-change="handleCurrentChange"
        :current-page="currentPage4"
        :page-size="10"
        layout="total, prev, pager, next"
        :total="40">
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  data() {
        return {
          Data: [
            {
              name: "河南工商系统",
              accessedAPINumber:1,
              update: "2019-10-14 11:12:62",
            },
            {
              name: "河南税务系统",
              accessedAPINumber:2,
              update: "2019-10-14 11:12:62"
            },
            {
              name: "河南工商系统",
              accessedAPINumber:3,
              update: "2019-10-14 11:12:62"
            },
             {
              name: "河南工商系统",
              accessedAPINumber:4,
              update: "2019-10-14 11:12:62"
            },
            {
              name: "河南工商系统",
              accessedAPINumber:5,
              update: "2019-10-14 11:12:62"
            },
            {
              name: "河南工商系统",
              accessedAPINumber:6,
              update: "2019-10-14 11:12:62"
            },
             {
              name: "河南工商系统",
              accessedAPINumber:7,
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
              accessedAPINumber:10,
              update: "2019-10-14 11:12:62"
            }
           
          ]
        }
  },
  methods: {
    goDetail(name){
      this.$router.push(`/apimanager/${name}`)
    }
  }

}
</script>

<style>
.content{
  display: inline-flex;
  width: 20%;
}
.cardList{
  width: 100%;
  margin: 0px 15px 20px 0px;
  cursor: pointer;
}
.page{
  margin-top: 40px;
}

</style>