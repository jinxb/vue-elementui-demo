<template>
  <div class="menu">
    <el-row>
      <el-button
        v-for="(item, index) in fList"
        :key="item.id"
        :class="[
          'menu_item',
          { back: index === 5 },
          { ar: index === currentIndex },
          { hover: index === showColor}
        ]"
        @mouseenter.native="handleActive(index)"
        @mouseleave.native="handleActive()"
        @click="clickStairs(index)"
        >{{ index === currentIndex || index === showColor ? item.s2 : item.s1 }}</el-button
      >
    </el-row>
  </div>
</template>

<script>
// 通过滚动位置 判断1f是否到了 到了 就给flag为true
export default {
  name: "HMenu",
  props:{
    fList:{
      type: Array,
      default:()=>{
        return []
      }
    }
  },
  data() {
    return {
      currentIndex: null,
      showColor: null,
    };
  },
  methods: {
    handleActive(index) {
      console.log("111");
      if (index || index === 0) {
        this.showColor = index;
      } else {
        this.showColor = null;
      }
    },
    clickStairs(index) {
      this.currentIndex = index;
      this.$emit('clickStairs',this.currentIndex);
    },
  },
};
</script>

<style lang="scss">
.menu {
  width: 40px;
  height: 280px;
  position: fixed;
  top: 200px;
  left: 50%;
  margin-left: -660px;
  display: block;
  z-index: 999;
  .menu_item {
    width: 28px;
    height: 39px;
    padding: 0 2px;
    color: #333333;
    text-align: center;
    line-height: 39px;
    border-bottom: 1px dotted #c2c2c2;
    background: #ffffff;
    position: relative;
    box-sizing: content-box !important;
    span {
      width: 28px;
      height: 34px;
      top: 0;
      left: 0;
      right: 0px;
      bottom: 0px;
      font: 12px/15px "microsoft yahei";
      cursor: pointer;
      box-sizing: content-box !important;
    }
  }
  .el-button + .el-button {
    margin-left: 0px;
  }
  .el-button {
    border-radius: 0%;
    white-space: normal;
    border: 0px solid #dcdfe6;
    border-bottom: 1px dotted #c2c2c2;
  }
  /* .el-button:hover {
    display: block;
    color: #ffffff;
    background: #00b0f9;
  } */
  .back.el-button {
    display: block;
    width: 28px;
    height: 30px;
    padding: 15px 2px 9px;
    font: 12px/15px "microsoft yahei";
    /* position: absolute; */
    top: 0;
    left: 0;
    right: 0px;
    bottom: 0px;
    color: #ffffff;
    background: #918888 url("../../../assets/img/slidedown4.png") no-repeat
      center 7px;
    box-sizing: content-box !important;
  }
  .hover{
    width: 28px;
    height: 39px;
    top: 0;
    left: 0;
    right: 0px;
    bottom: 0px;
    font: 12px/15px "microsoft yahei";
    cursor: pointer;
    box-sizing: content-box !important;
    display: block;
    color: #ffffff;
    background: #00b0f9;
  }
  .ar {
    width: 28px;
    height: 39px;
    top: 0;
    left: 0;
    right: 0px;
    bottom: 0px;
    font: 12px/15px "microsoft yahei";
    cursor: pointer;
    box-sizing: content-box !important;
    display: block;
    color: #ffffff;
    background: #00b0f9;
  }
}
</style>