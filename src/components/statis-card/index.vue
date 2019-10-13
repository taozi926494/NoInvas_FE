<template>
  <div class="statis-card">
    <i class="statis-card-icon" :class="iconclass" :style="{color: iconcolor}"></i>
    <div class="statis-card-content">
      <p class="statis-card-name">{{ name }}</p>
      <p class="statis-card-value">{{ value }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.statis-card {
  height: 100px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 12px 0px;
  min-width: 300px;
  background-color: #fff;
  display: flex;
  align-items: center;
  &-icon {
    width: 80px;
    font-size: 40px;
  }
  &-content {
    flex: 1;
    p {
      text-align: right;
      padding-right: 40px;
      font-weight: 700;
      margin: 10px 0;
    }
  }
  &-name {
    color: #999;
  }
  &-value {
    font-size: 26px;
  }
}
</style>

<script>
export default {
  props: {
    name: {
      type: String,
      default: ''
    },
    value: {
      type: Number,
      default: 0
    },
    iconclass: {
      type: String,
      default: "el-icon-menu"
    },
    iconcolor: {
      type: String,
      default: "#000"
    }
  }
}
</script>