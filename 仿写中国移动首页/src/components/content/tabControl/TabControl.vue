<template>
  <div class="head_nav" :v-if="navInfo.length">
    <el-row class="nav">
      <el-button type="text" v-for="(item,index) in navInfo" :key="item" :class="['active',{allService1:index === 0},{indexColor:index === 1}]">{{ item }}</el-button>
    </el-row>
 </div>
</template>

<script>
export default {
  name: 'TabControl',
  props:{
    navInfo: {
      type: Array,
      default: function () {
        return []
      }
    }
  },
  data() {
    return {
    }
  },
 }
</script>

<style lang="scss">
.head_nav {
    width: 1200px;
    height: 47px;
    margin: 0 auto;
    border-bottom: 1px solid #3eb4fa;
    position: relative;
    .nav {
    float: left;
    height: 47px;
    margin-bottom: 0;
    list-style: none;
    }
    .allService1{
    color: #FFF;
    cursor: default;
    background: url('../../../assets/img/left_navbj01.jpg') no-repeat;
    float: left;
    width: 235px;
    height: 47px;
    margin-right: 29px;
    font: 17px/47px "microsoft yahei";
    text-align: center;
    color: #ffffff!important;
    }
    .indexColor{
      color: #3eb4fa;
    }
    .el-button{
      border-radius: 0px;
    }
    .el-button+.el-button{
      margin-left: 0;
    }
}

.active{
  display: inline-block;
  padding: 0 29px;
  font: 16px/47px "microsoft yahei";
  background: none;
  color: #222222;
}
/* .allService1.el-button:focus.el-button:hover{
    color: #fff; 
    border-color: #c6e2ff;
    background-color: #ecf5ff;
} */
</style>