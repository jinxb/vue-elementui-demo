<template>
  <div>
    <div class="btnList">
      <!-- <li v-for="o in 7" :key="o" :style="`background-image:url('../../../assets/img/li_${o}.png');`"></li> -->
      <el-button v-for="(o,index) in 7" :key="o" :class="{cur: currentIndex === index}"  @mouseenter.native="handleCur(index)" @mouseleave.native="handleCur()">默认按钮</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavBusiness',
  data() {
      return {
        currentIndex: ''
      }
    },
    methods: {
      handleChange(value) {
        console.log(value)
      },
      handleCur(index){
        if(index || index === 0){
          this.currentIndex = index
        }else{
          this.currentIndex = ''
        }
      }
    }
 }
</script>

<style lang="scss">
.btnList{
    float: left;
    width: 235px;
    height: 398px;
    position: absolute;
    left: 0px;
    top: 0px;
    z-index: 10;
    .el-button+.el-button{
      margin-left: 0;
    }
    .el-button{
      clear: both;
      width: 233px;
      height: 52px;
      border: 1px solid #ffffff;
      background: #ffffff url('../../../assets/img/nav_bgli.png') no-repeat 195px center;
      text-align: left;
      font-size: 16px;
      padding-left: 50px;
      border-radius: 0px;
    }
    .el-button.is-disabled, .el-button.is-disabled:focus, .el-button.is-disabled:hover{
      /* color: #409EFF */
      background-image: url('../../../assets/img/nav_bgli.png');
    }
    .cur{
    width: 234px;
    height: 52px;
    border: 1px solid #3eb4fa;
    border-right: 2px solid #ffffff;
    background: #ffffff url('../../../assets/img/nav_bgli.jpg') no-repeat 195px center;
    z-index: 10;
    }
}
</style>